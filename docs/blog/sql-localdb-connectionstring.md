---
title: localdb connection string
date: 2019-02-17
description: localdb connection string for SQL server
author: Petter
---
# SQL Server local db connection string
<!-- <hr>
<span>By {{$page.frontmatter.author}}  {{$page.frontmatter.date}}</span>      
<hr> -->
<br>
I can never remember that connectionstring for localdb on SQLServer. The thing about localdb is that it just works. And ef core will create the db on the fly when running `context.Database.Migrate();` if it doesn't already exist. This means happy times when you are doing a fresh clone 😄

```
"Server=(localdb)\\mssqllocaldb;Database=Company.Application.NameOfDb;Trusted_Connection=True;"
```

This "blog" is basically a place for reminders like these. However small and stupid. 
