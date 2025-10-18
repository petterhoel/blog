---
title: Run SQL Server on a M1 Mac
published: 2022-06-06
description: How to set up a docker instance of SQL Server on a M1 Mac.
author: Petter
---
# Run SQL Server on a M1 Mac

## TL;DR
Just run this
```shell
docker run -e "ACCEPT_EULA=1" -e "MSSQL_SA_PASSWORD=SomePass@word" -e "MSSQL_PID=Developer" -e "MSSQL_USER=SA" -p 1433:1433 -d --name=sql mcr.microsoft.com/azure-sql-edge
```

## Command Breakdown
What are those flags
```shell
docker run
-e "ACCEPT_EULA=1" # environment variable
-e "MSSQL_SA_PASSWORD=SomePass@word" # environment variable
-e "MSSQL_PID=Developer" # environment variable
-e "MSSQL_USER=SA" # environment variable
-p 1433:1433  # Publish a container's port(s) to the host / port forwarding
-d # Run container in background and print container ID (--detach)
--name=sql # Assign a name to the container
mcr.microsoft.com/azure-sql-edge
```

## Source
Credit where credit is due. I got this from Maarten Merken [over on medium](https://medium.com/geekculture/docker-express-running-a-local-sql-server-on-your-m1-mac-8bbc22c49dc9). So I am just rehashing the content here for safe keeping 😄
