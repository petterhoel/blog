---
title: Import Your Angular Scss Files in Storybook 
date: 2021-08-25
description: How to deal with styles from external *.scss files when working with storybook
tags: storybook, nx, angular , scss, sass
author: Petter
---
# Import Your Angular Scss Files in Storybook

Most commonly there is a need to include som set of global or external styles for storybooking Angular projects. As many use cases as there is ways of organizing styles I guess 😅

Add a file responsible for importing styles. 
```
.storybook/
 |--main.js
 |--preview.js
 |--style-loader.scss 🆕
```
Import the styles you need. 
```scss
// style-loader.scss
@import "/path/to/my/global/styles";
```

Then tell storybook to include those styles by editing `preview.js`
```javascript
// preview.js
import '!style-loader!css-loader!sass-loader!./scss-loader.scss';
```

## If your design system/css is depending on some root tag/attribute
It is not unusual that there is some special "hinge" near the root of your html DOM tree that in some ways controls part of your styles. 

Storybook allows for manipulating the body by including a custom file named `preview-body.html` and putting ypur content there. There is a similar option 'preview-head.html' if you want to include something on the `<head>`-tag

```
.storybook/
 |--main.js
 |--preview.js
 |--style-loader.scss
 |--preview-body.html << add this if you have custom stuff to include
```

So we could do something like this
```html
<!-- preview-body.html -->
<html app-theme="light"></html>
```

With storybook outputting something like this
```html
<iframe data-is-storybook="true" id="storybook-preview-iframe" title="storybook-preview-iframe" src="iframe.html?id=*&amp;viewMode=story" allowfullscreen="" class="css-crh05v" data-dashlane-rid="a0c96268093f1442" data-form-type="" data-is-loaded="true" data-dashlane-frameid="25769803777">
    <html app-theme="light" lang="en">
    ...
    </html>
</iframe>
```
