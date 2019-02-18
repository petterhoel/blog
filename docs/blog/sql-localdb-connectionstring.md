---
title: SQL localdb Connectionstring
date: 2019-02-17
description: Connection string on windows
---
# SQL Server local db

I can never remember that connectionstring for localdb on SQLServer. localdb justs works and ef core will create the db on the fly when running `context.Database.Migrate();` if it doesn't already exist. Happy times when you are doing a fresh clone 😄

```
"Server=(localdb)\\mssqllocaldb;Database=Company.Application.NameOfDb;Trusted_Connection=True;"
```

This "blog" is basically a place for reminders like these. However small and stupid. 
