---
title: Import Your Angular Scss Files in Storybook
published: 2021-08-25
description: How to deal with styles from global/external *.scss files when working with storybook
author: Petter
---
# Import Your Angular Scss Files in Storybook
***update: June 1st 2022***: If you are using Nx `>=14.1.8` this is now more straight forward and nx has quite [clear docs here](https://nx.dev/storybook/extra-topics-for-angular-projects#configuring-styles-and-preprocessor-options)

## For projects >= Angular 13.1
Things kind of broke when Angular 13 came out and I could not get gobal styles to happen. Between Nx, Storybook and Angular there was a myraid of issues on GitHub. I gave up trying and waited it out.

However things seem to have stabilized. You no longer need `preview.js` and `style-loader.scss`. Instead you point to your styles in your `project.json` or `workspace.json`. Like this:

```json
// <project-root>/libs/<lib-name>/project.json
{
    ...

  "storybook": {
    "executor": "@nrwl/storybook:storybook",
    "options": {
        "uiFramework": "@storybook/angular",
        "port": 4400,
        "config": {
        "configFolder": "libs/<lib-name>/.storybook"
        },
        "projectBuildConfig": "<lib-name>:build-storybook"
    },
    "configurations": {
        "ci": {
        "quiet": true
        }
      }
    },

  "build-storybook": {
    "executor": "@nrwl/storybook:build",
    "outputs": [
        "{options.outputPath}"
    ],
    "options": {
        "uiFramework": "@storybook/angular",
        "outputPath": "dist/storybook/<lib-name>",
        "config": {
        "configFolder": "libs/<lib-name>/.storybook"
        },
        "projectBuildConfig": "<lib-name>:build-storybook",
        "styles": ["./apps/<app-name>/src/styles.scss"] 👈
    },
    "configurations": {
        "ci": {
        "quiet": true
        }
      }
    }

    ...

}
```
## Relevant versions where it works
```json
// package.json
{
  "dependencies": {
    "@angular/<...>": "13.2.2"
  },
  "devDependencies": {
    "@angular-devkit/<...>": "13.2.2",
    "@angular/<...>": "13.2.2",
    "@nrwl/<...>": "13.8.0",
    "@storybook/<...>": "6.4.18"
  }
}
```

## For project before Angular 13
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
 |--preview-body.html 🆕
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
