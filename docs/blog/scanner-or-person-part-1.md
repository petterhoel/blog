---
title: Scanner or person? Part 1
date: 2020-01-03
description: How we differentiated between input from a scanner and from a person typing
author: Petter
---
# Scanner or person? 🤔 Part 1

## The challenge: Differentiate scanner from keyboard in the browser using keyboard events
A client wanted to use a barcode scanner with a web app we were making. Normal use would allow this to work out of the box, but some extra requirements made this a fun task to solve 🥳

- The application needed to collect values from the scanner regardless of where focus was on the page.
- Free text inputs such as `<input>` and `<textarea>` should be able to ignore values from the scanner. (This will be addressed un an upcoming Part 2)

#### Other requirements

- Scanner is to be used as a keyboard wedge without modification or custom setup. This is to ease any work outside of development related to operations: setup, maintenance, cross-application use etc.
- ![Example bar code encoding the text *WIKIPEDIA*](https://upload.wikimedia.org/wikipedia/commons/0/0b/Code_3_of_9.svg#small "Example bar code")We are scanning [Code 39 bar codes](https://en.wikipedia.org/wiki/Code_39) like this one from Wikipedia. In other words your everyday bar codes.


## #1 Can we programmatically separate events by device?

If we knew the device type we could just have a simple `if`. For example:
``` ts
// i'm making this up
if (event.deviceType === 'SCANNER') {
	handleAsScanner(event);
}
```
⛔ Maybe some day web-usb will allow something like this in a nice cross-browser fashion. But as of now, no cigar 😰.

## #2 Can we separate events programmatically by behavior?

😆 Probably!
Machines tend to behave predictably. Humans, not so much.
A little bit of googling and I found some inspiration [online](https://web.archive.org/web/20150316093927/http://nicholas.piasecki.name/blog/2009/02/distinguishing-barcode-scanners-from-the-keyboard-in-winforms).

> TL;DR: Your scanner will fire events rapidly and consistently. Your user won't.

## Initial investigation
On my developer machine we measured scanner event interval to be quite steady ~7-8 ms. However sometimes there was a longer interval ~16 ms. A whole lot of test scanning later this behavior seemed to be quite consistent. To give some leeway we thought: Ok lets propose a threshold at 20 ms, forming the rule: Machine will produce next event in under 20 ms.
> Machine will produce next event in under 20 ms.

So far we had only measured the machines behavior. I am a slow typist, but some people type at impressive speeds. So next step was measuring event intervals from a human source. Problem: Slow typist. Solution: Act like a fast typist by not caring what is being typed 🙄 😹. Silly, but more than good enough for our purposes.

Smashing the keyboard as fast as I could revealed that humans can also generate a sequence of events under 20ms. Is all hope lost? Well as always, it depends.

Specifically it depends on the length of the strings you are scanning. We kept typing fast and were able to generate 2 key stokes with intervals under 20ms quite easy, three keystrokes was hard, but doable. 4 key stokes we could not manage without a 20ms gap between some of the keystrokes. Our use case was 8 character string minimum so we had just found another useful rule. It is a machine producing the events if 4 or more keyboard events happen sequentially with no more than 20ms gap between each.

> It is a machine producing the events if 4 or more keyboard events happen sequentially with no more than 20ms gap between each.

This starts to look like something we could write code towards. But first:

## A note on performance: a caveat

> Results can therefore not be guaranteed.

Let us be clear here, even before we get into the code. This approach relies on event timings. That again relies on hardware, OS and browser performance. In other words desired behavior is tightly bound to compute environment and its workload at runtime. Results can therefore not be guaranteed. Know your use case, test to see if this approach works for you.

## Code

Let' s look at some code and break this down somewhat (A full example will be near the end). The project is closed source, but this was a cool client who did not mind sharing this part of the code base. We will look at both main use cases.

1. A global scanner event handler that collects scanner values but ignores human typing.
2. A local event handler that ignores the scanner and only cares about input by a human. Think of this as a filter you can apply to your `<input>` or `<textarea>`. (See upcoming part 2)

This was an Angular🥰 project, but there is no reason it could not be done in any other js-framework or vanilla 🤓.

### #1 ScannerService: a global listener for scanned values 🌏🦻

#### Bring the pseudo code

``` ts
// Listen for all keyboard events.
// Buffer values.
// Keep track of intervals.
// Inform someone if value is determined to come from a scanner.
```

#### Listen for all keyboard events

This is just a way to do `document.addEventListener(...)` in Angular

``` ts
this.rendener.listen(
	'document',
	'keyup',
	(event: KeyboardEvent) => this.handleKeyUp(event));
```

#### Handle the event

Birdseye view of the event handling: Collect events >> Set up a timeout >> If there has been less than 4 events and we are timing out we clear our buffer >> However if there has been 4 or more events we take action and then clear our buffer.

- `this.events` is our buffer.
- `this.interval` is out timeout threshold set to 20 ms.

``` ts
handleKeyUp(event: KeyboardEvent): void {
	// you can start with a scannerActive flag
	// if you want. We had a flag that turned the
	// scanner service off or on depending on what part
	// of the app is being used eg route
	if (this.timeoutHandler) {
		clearTimeout(this.timeoutHandler);
	}
	this.collectValue(event);
	this.timeoutHandler = setTimeout(() => {
		if (this.events.length < 4) {
			this.clearEvents();
			return;
		}
		this.updateValues();
		this.clearEvents();
	}, this.interval);
}
```

#### Collecting events

``` ts
// collecting events to the buffer eg this.events
private collectValue(event: KeyboardEvent): void {
	if (event.keyCode === ENTER || event.keyCode === CAPS_LOCK) {
		return;
	}
	this.events.push(event);
}
```

#### Update values

We collect whatever is collected in the buffer as a string and announce that value to the world. Announcing was handled in an external service in our application. Basically a simple store that exposed new scanner values. The components that would care about new scanner values would not know about our `ScannerService` or how the values was collected. They would just ask `ScannerValueServie` to feed them most recent values. In other words `ScannerValueServie` was a slim proxy responsible for delivering new values. In our app this was implemented using [RXJS](https://github.com/Reactive-Extensions/RxJS) with [Observables](https://rxjs.dev/guide/observable) and [BehaviorSubject](https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject).

``` ts
private updateValues(): void {
	const scannerValue = this.eventsToString();
	this.scannerValueService.setNextValueFromScanner(value);
}

// helper that returns a string representation of
// the buffer content
private eventsToString(): string {
	return this.events
		.filter(event => event.keyCode !== SHIFT)
		.map(event =>  event.key)
		.join('');
}
```

#### Complete `ScannerService`

Heads up: There may be 🐛🐛🐛. The code is changed somewhat for simplification and to obscure my client. It has not been tested, and should be used as a guide rather than a battle tested implementation.

``` ts
@Injectable({
	providedIn: 'root'
})
export class ScannerService implements OnDestroy{
	private interval = 20;
	private timeoutHandler: any = 0;
	private events: KeyboardEvent[] = [];
	private rendener: Renderer2;
	private readonly removeListenerFn: () => void;
	private scannerIsActive = false;
	private subs = new SubSink();

	constructor(
		private scannerValueService: ScannerValueService,
		private rendenerFactory: RendererFactory2,
		private router: Router
		) {
		this.rendener = this.rendenerFactory.createRenderer(null, null);
		this.removeListenerFn = this.rendener
			.listen(
				'document',
				'keyup',
				(event: KeyboardEvent) => this.handleKeyUp(event));
		this.subs.sink = this.router.events.subscribe(() => this.setIsActive());
	}

	ngOnDestroy(): void {
		if (this.removeListenerFn) {
			this.removeListenerFn();
		}
		this.reset();
	}

	private reset(): void {
		this.scannerIsActive = false;
		this.clearEvents();
		this.subs.unsubscribe();
	}

	private setIsActive(): void {
		const { url } = this.router;
		this.scannerIsActive = url
			.includes('whatever')
			|| url.includes('path')
			|| url.includes('of')
			|| url.includes('app')
			|| url.includes('depending')
			|| url.includes('on')
			|| url.includes('this')
			|| url.includes('service');
	}

	handleKeyUp(event: KeyboardEvent): void {
		if (!this.scannerIsActive) {
			return;
		}
		if (this.timeoutHandler) {
			clearTimeout(this.timeoutHandler);
		}
		this.collectValue(event);
		this.timeoutHandler = setTimeout(() => {
			if (this.events.length <= 3) {
					this.clearEvents();
					return;
			}
			this.updateValues();
			this.clearEvents();
		}, this.interval);
	}

	private collectValue(event: KeyboardEvent): void {
		if (event.keyCode === ENTER || event.keyCode === CAPS_LOCK) {
				return;
		}
		this.events.push(event);
	}

	private updateValues(): void {
		const scannerValue = this.eventsToString();
		this.scannerValueService.setNextValueFromScanner(value);
	}

	private eventsToString(): string {
		return this.events
			// our scanner starts sequence with shift
			.filter(event => event.keyCode !== SHIFT)
			.map(event => event.key)
			.join('');
	}

	private clearEvents(): void {
		this.events = [];
	}
}
```
Any feedback is most welcome. [Twitter](https://twitter.com/petterhoel "@petterhoel") is a good place to find me.
