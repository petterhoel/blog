---
title: Tiny dotnet web api
published: 2020-11-28
description: How to make the smallest possible web api with .Net 5 and top level statements in c# 9.
author: Petter
---
# Tiny dotnet web api

With top level statements in c#9 and dotnet 5 there is really little code needed to have a working web api.

Prerequisite: [Download and install .Net 5 SDK](https://dotnet.microsoft.com/download).

Over in your terminal:

```shell script
# Make a .Net project file
> touch tiny-web-api.csproj

# Make a c# entrypoint for our api
> touch Program.cs
```

In the project file, tell .Net about the sdk and .Net-version we want to use.

```xml
<!-- tiny-web-api.csproj -->

<Project Sdk="Microsoft.NET.Sdk.Web">
  <PropertyGroup>
    <TargetFramework>net5.0</TargetFramework>
  </PropertyGroup>
</Project>
```

Now we can build the web api in c#.
```csharp
// Program.cs

using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

WebHost
    .CreateDefaultBuilder()
    .Configure(app =>
        app.Run(httpContext =>
            httpContext.Response.WriteAsync("I'm a tiny api")))
    .Build()
    .Run();
```

Thats it, we are done 🙌

Let's run the api from the terminal
```shell script
> dotnet run
```
it will output something like
```shell script
> dotnet run

Hosting environment: Production
Content root path: /path/to/your/code
Now listening on: http://localhost:5000
Now listening on: https://localhost:5001
Application started. Press Ctrl+C to shut down.
```
To see it working, visit [localhost:5000](http://localhost:5000) in you browser, or from the command line with curl.

```shell script
> curl http://localhost:5000
I'm a tiny api
```

👉 [Filip W](https://twitter.com/filip_woj) wrote this up [over at his blog](https://www.strathweb.com/2020/10/beautiful-and-compact-web-apis-with-c-9-net-5-0-and-asp-net-core/), and this is basically my TL;DR of that post. Go there for more, Phil writes really well about web develoment 👏
