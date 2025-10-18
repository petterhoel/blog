---
title: Changing your git remote
published: 2022-02-14
description: Changing your git remote
author: Petter
---
# Changing your git remote

Once in a while me, or a college, needs to swap the pointer to origin. Say, switching from https to ssh. This is the gist of it.

*_List your existing remote_*
```shell
> git remote -v
https://github.com/petterhoel/blog.git
```


*_Delete your existing remote_*
```shell
> git remote remove origin
```


```shell
# git remote add <name> <url>
> git remote add origin git@github.com:petterhoel/blog.git
git@github.com:petterhoel/blog.git
```


*_List your new remote to verify_*
```shell
> git remote -v
origin git@github.com:petterhoel/blog.git (fetch)
origin git@github.com:petterhoel/blog.git (push)
```
