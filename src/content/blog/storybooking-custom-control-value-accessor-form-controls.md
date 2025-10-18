---
title: Storybooking Custom Control Value Accessor Form Controls
published: 2021-08-25
description: Use Storybook.js with Angular Components that implements ControlValueAccessor
author: Petter
---
# Storybooking Custom ControlValueAccessor Form Controls

Sometimes it is really neat to implement custom form controls by implementing the `ControlValueAccessor` interface.

We do wanna be able to develop and test them in isolation and there is  some small amount of setup needed to make them play along with Storybook. This is really about making a proper environment for these controls when they are spun up in isolation by storybook.

Make sure storybook knows about `FormsModule`. In your `<something>.component.stories.ts` file
```ts
// custom-form-control.component.stories.ts

export default {
  title: 'CustomFormControlComponent',
  component: CustomFormControlComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule], 👈
    })
  ],
} as Meta<CustomFormControlComponent>;
```
We also need to tell storybook about `ngModelChange`. Add `ngModel` and `ngModelChange` to props. We keep previous args by spreading them.
```ts
// custom-form-control.component.stories.ts

const Template: Story<CustomFormControlComponent> = (args: CustomFormControlComponent) => ({
    component: CustomFormControlComponent,
    props: {
        ...args, 👈
        ngModel: 'Type anything', 👈
        ngModelChange: action('ngModelChange') 👈
    },
})
```
If addon-actions is not in your package.json already, install the package as a dev dependency.
``` shell
npm install -D @storybook/addon-actions
```

And break the habit of default `undefined` implementations of `onTouched` and `onChange` in your component so it may have a life outside an Angular form. Also, please consider having a typed value instead of `any`. This is just an example.

```ts
  // 😬 stop this nonsense
  onTouched!: () => void;
  onChange!: (value: any) => void;

  // 😇 provide an empty default implementation instead
  onChange = (value: any) => {};
  onTouched = () => {};
```
