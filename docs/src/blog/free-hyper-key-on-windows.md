---
title: Free hyper key on windows
date: 2025-03-10
description: How to make hyperkey free of triggering M365. 
author: Petter
---
# Free hyper key on windows


CAUTION: this is a registry edit. You may harm your computer.
```shell
sudo REG ADD HKCU\Software\Classes\ms-officeapp\Shell\Open\Command /t REG_SZ /d rundll32
```
