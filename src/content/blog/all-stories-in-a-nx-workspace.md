---
title: All stories in a nx workspace
published: 2022-06-01
description: How to set up a storybook containing all stories in a nx repo.
author: Petter
---
# All stories in a nx workspace

## 1 Generate a wrapper library
This library has the lone responsbility of settilng up a storybook that includes all the stories in your workspace
```shell
nx generate @nrwl/angular:storybook-configuration --name=all-stories
```
## 2 Modify main.js
We want `main.js` to include stories for the whole solution. So we change the `stories`-value to
```javascript
// ./libs/all-stories/.storybook/main.js
const allStories = ['../../**/*.stories.ts'];;
module.exports = {
    ...
    stories: allStories
    ...
}
```

## 3 Modify your typescript config
We want to include files from the root of the workspace so we modify the `"include"`-array in `tsconfig.json`
```json
// ./libs/all-stories/.storybook/tsconfig.json
{
  ...
  "include": ["../../../**/*.ts", "*.js"]
  ...
}
```

## 4 Thats it! 🎉
Run this and your good to go
```shell
nx storybook all-stories
```
