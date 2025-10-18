---
title: Free the hyper key on windows
published: 2025-03-10
description: How to make hyperkey not trigger M365 on windows.
author: Petter
---
# Free the hyper key on windows


CAUTION: this is a registry edit. You may harm your computer.
```shell
sudo REG ADD HKCU\Software\Classes\ms-officeapp\Shell\Open\Command /t REG_SZ /d rundll32
```
