# bits && pixels blog

[bitsnpixles.io](https://bitsnpixels.io)  
This is a place for reminders and thoughts on whatever I come across as a developer that I find reassuring to have a permalink for.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need [yarn](https://yarnpkg.com/) or [npm](https://nodejs.org/) on your machine, an evergreen browser and preferably your favorite text edtior 🤓 

### Installing

Clone this repo
```
> git clone https://github.com/petterhoel/blog.git
```
Change directory
```
> cd blog
```

Install dependencies
```
> yarn
```

Spin up the dev server

```
> yarn docs:dev 
```
navigate to [localhost:8080](http://localhost:8080)

## Running the tests

```
thank you for playing! but our tests are in another castle
```

## Deployment [![Netlify Status](https://api.netlify.com/api/v1/badges/fcee5757-7d0e-43e6-b441-28bd554805ba/deploy-status)](https://app.netlify.com/sites/gallant-mahavira-2e103d/deploys)
A merge to master will deploy _this_ site. 

If you are using this as a starter for your own project you wanna run 

```
> yarn docs:build
``` 

That will create all the static files for your site and place them in ```docs/.vuepress/dist```. Copy these files to your sites root folder. 

This projects uses [netlify](https://www.netlify.com/) for that. They make it real simple. 

## Built With

* [VuePress](https://vuepress.vuejs.org/) - VuePress
* [Netlify](https://www.netlify.com/) - Netlify

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.


## Authors

* **Petter Hoel** - [petterhoel](https://github.com/petterhoel/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

