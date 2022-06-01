---
title: Npm version annotation
date: 2022-06-01
description: Tilde, caret wjat does it mean for you dependencies
author: Petter
---
# Npm version annotation

## No prefix
`"vuepress": "1.9.7"` - I rely on this specific version.

## ~ tilde
`"vuepress": "~1.9.7"` - I rely on this specific version or latest patch.
## ^ caret
`"vuepress": "^1.9.7"` - I rely on this specific version, or latest minor version, or latest patch.
## Semver
`1.9.7`
major.minor.patch