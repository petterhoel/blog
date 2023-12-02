---
title: How to keep your Angular project up to date
date: 2019-09-23
description: Command to bump your angular project to the latest version.
author: Petter
---
# How to: Keep your Angular project up to date

The hardest thing about keeping an Angular project up to date is typing this command. So I just head here and copy it 🐱‍💻

```
npm run ng update @angular/cli@next @angular/core@next -- --force
```

Force flag is because the new version are likely out of scope for third party dependencies in your project. The flag means: ignore whatever warnings and errors are occuring. Sounds somewhat dangerous, but the Angular compiler should recompile theese libraries in a compatible fashion so forcing should be safe.

In fact if it causes problems the Angular team will be thankful if you report it so they can resolve the issue. They put in a lot of effort keeping the ecosystem and upgrade experience pain free across versions and dependencies.

Thank you *Team Angular* 🥳