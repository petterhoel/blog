---
title: Handy key filtering in Angular templates
date: 2019-04-15
description: Key event filtering in angular templates
author: Petter
---
# Handy key filtering in Angular templates

Learned this one from [Minko](https://github.com/mgechev) over at [twitter](https://twitter.com/mgechev/status/1097369234047348736).



```
(keydown.escape)="onEscapeDoSomething()"
```

Did some quick checks and it seems the listener is scoped to the DOM-level it is introduced. Meaning focus should be on the element that has the event listener or one of its children for it to work.

Super handy for those tiny interaction and accessability behaviour improvements.


And whaddaya know - you can chain keys for key combos 🤗 Thanks to [Juliano](https://twitter.com/julianopavel) for pointing that out.
```
(keydown.control.i)="displayInfo()"
```