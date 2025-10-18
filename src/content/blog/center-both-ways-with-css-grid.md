---
title: Center Both Ways with Css Grid
published: 2021-09-17
description: Use a css one liner to center child horizontally and vertically with css grid.
author: Petter
---
# Center Both Ways with Css Grid


Consider the following html:
```html
<span id="center-all-the-things">
  <button>💩</button>
</span>
```

We want to center our button. Assuming we are using css grid, we only need a one liner to center our s#itty button.

```css
#center-all-the-things {
  display: grid;
  place-content: center; 🥳
}
```

<section>
    <style>
        #center-all-the-things {
            display: grid;
            place-content: center;
            width: 100%;
            height: 500px;
            resize: both;
            background: pink;
            overflow: scroll;
        }
        button {
          border: none;
          font-size: 4rem;
          background: transparent;
        }
    </style>
    <span id="center-all-the-things">
        <button>💩</button>
    </span>
</section>


One line to center, but there is some more going on in the embedded example, so for completeness:

```html
<section>
    <style>
    #center-all-the-things {
        display: grid;
        place-content: center;
        width: 100%;
        height: 500px;
        resize: both;
        background: pink;
        overflow: scroll;
    }
    button {
      border: none;
      font-size: 4rem;
      background: transparent;
    }
    </style>
    <span id="center-all-the-things">
        <button>💩</button>
    </span>
</section>
```
