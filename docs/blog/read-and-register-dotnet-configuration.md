---
title: "Read and register .Net configuration"
date: 2021-09-04
description: How ro read and register configuration on app startup in .Net and use it with Dependency Injection later on 😻
author: Petter
---
# How ro read and register configuration on app startup in .Net

This is a task that I seldom do. It is usually only done at the start of a project or when adding subtansial features. And I always have to look it up. 

In the standard webapp-template for dotnet, the configuration class is injected into the `Startup.cs` file. However, some projects live quite well without `Startup.cs`. Think worker services or the new slim and hip new style of top level `Program.cs`. We will see how to get a hold of configuration, read the content into classes and register them with the Dependency Injection Engine in .net. We will also see it in use. 

Our example is a very useful 🐱-based background service. 

Consider the following configuration, rather crutial info we need to run our application. 
```json
// appsettings.json
{
  "Cat": {
    "Name": "Lotta"
  },
  "CatWorkerConfiguration": {
    "DelayInMs": 3000
  }
}
```

It maps to the following in `c#`

```csharp
// Cat.cs
public record Cat
{
    public string Name { get; init; } = string.Empty;
}
```

```csharp
// ICatWorkerConfiguration.cs
public interface ICatWorkerConfiguration
{
    int DelayInMs { get; }
}

// CatWorkerConfiguration.cs
public record CatWorkerConfiguration : ICatWorkerConfiguration
{
    public int DelayInMs { get; init; }
}
```

And the app entrypoint is as follows
```csharp
// Program.cs
await Host
    .CreateDefaultBuilder(args)
    .ConfigureServices(services => services.ReadConfigAndAddConfigAndWorker())
    .Build()
    .RunAsync();
```

And now to the point. What is `.ReadConfigAndAddConfigAndWorker()` and what does it do. It is a builder-pattern extention method we will write and use to do all the config related stuff. 

```csharp
// ConfigLoaderHelper.cs
public static class ConfigLoaderHelper
{
    public static IServiceCollection ReadConfigAndAddConfigAndWorker(
    this IServiceCollection services)
    {
        // get a hold of the services container
        ServiceProvider serviceProvider = services.BuildServiceProvider();
        
        // When bootstrpping the application .Net auto loades a config class for us. 
        // .Net also will add whetever it finds in appsettings.json.
        // This is how we ask to see that config class.
        IConfiguration config = serviceProvider
            .GetService<IConfiguration>() 
            ?? throw new Exception("Missing congiguration");
        
        // Read and DI-register based on class
        // Let's do that for the cat part
        Cat catConfig = config.GetSection(nameof(Cat)).Get<Cat>();
        services.AddSingleton(catConfig);
        
        // We can also read and DI-register based on an interface
        // Let's do that with the CatWorkerConfiguration
        CatWorkerConfiguration workerConfig = config
            .GetSection(nameof(CatWorkerConfiguration))
            .Get<CatWorkerConfiguration>();
        services.AddSingleton<ICatWorkerConfiguration>(workerConfig);
        
        // Finally we load our mighty service and return happily
        services.AddHostedService<CatWorker>();
        return services;
    }
}
```

Now we can inject our config at will where ever we need it. Let's see that in action and finally see what use this mighty application does. 

```csharp
// CatWorker.cs
public class CatWorker : BackgroundService
{
    private readonly ILogger<CatWorker> _logger;
    private readonly ICatWorkerConfiguration _workerConfig;
    private readonly Cat _cat;

    public CatWorker(
        Cat cat,
        ICatWorkerConfiguration workerConfig,
        ILogger<CatWorker> logger)
    {
        _logger = logger;
        _workerConfig = workerConfig;
        _cat = cat;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            var logtext = $"{_cat.Name} is the cat's name 🐱 Time: {DateTimeOffset.Now}";
            _logger.LogInformation(logtext);
            try
            {
                await Task.Delay(_workerConfig.DelayInMs, stoppingToken);
            }
            catch (OperationCanceledException)
            {
                return;
            }
        }
    }
}
```
The output is catastic 😽
```
info: CatWorkerService.CatWorker[0]
      Lotta is the cat's name 🐱 Time: 09/04/2021 16:55:12 +02:00
info: Microsoft.Hosting.Lifetime[0]
      Application started. Press Ctrl+C to shut down.
info: Microsoft.Hosting.Lifetime[0]
      Hosting environment: Development
info: Microsoft.Hosting.Lifetime[0]
      Content root path: /Users/petter/Code/WorkerService/WorkerService
info: CatWorkerService.CatWorker[0]
      Lotta is the cat's name 🐱 Time: 09/04/2021 16:55:15 +02:00
info: CatWorkerService.CatWorker[0]
      Lotta is the cat's name 🐱 Time: 09/04/2021 16:55:18 +02:00
info: CatWorkerService.CatWorker[0]
      Lotta is the cat's name 🐱 Time: 09/04/2021 16:55:21 +02:00
```

Some people like to use the options pattern. Others like a global static instance. Do it whatever way makes you happy. I happen to like this technique 🦄 🛸 🌈
