---
title: Localdb connection strings
date: 2019-02-17
description: Use localdb in SQL server connection strings for a hassle free dev setup.
author: Petter
---
# Use localdb in SQL Server connection strings
I can never remember how to type up Sql Server connectionstrings using localdb. The thing about localdb is that it just works, no setup required. 

Ef core will even create the db on the fly when running `context.Database.Migrate();` if it doesn't already exist. This means happy times whenever you or your team mates are doing a fresh clone 😄
  
```
"Server=(localdb)\\mssqllocaldb;Database=NameOfDb;Trusted_Connection=True;"
```

This "blog" is basically a place for reminders like these. However small and stupid. 
