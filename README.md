# bits && pixels blog

[bitsnpixles.dev](https://bitsnpixels.dev)  
This is a place for reminders and thoughts on whatever I come across as a developer that I find reassuring to have a permalink for.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need [npm](https://nodejs.org/) on your machine, an evergreen browser and preferably your favorite text edtior 🤓 

### Installing

Clone this repo
```shell
git clone https://github.com/petterhoel/blog.git
```
Change directory
```shell
cd blog/docs
```

Install dependencies
```shell
npm install
```

Spin up the dev server

```shell
npm run dev 
```
navigate to [localhost:8080](http://localhost:8080)

## Running the tests

```shell
# Thank you for playing! 
# But our tests are in another castle
# 🍄 🐢 👸 🪹
```

## Deployment
A merge to master will deploy _this_ site. 

If you are using this as a starter for your own project you wanna run 

```shell
npm run dev
``` 

That will create all the static files for your site and place them in ```/src/.vuepress/dist```. Copy these files to your sites root folder. 

This projects uses [Cloudflare Pages](https://www.cloudflare.com) for that. 

## Built With

* [VuePress](https://vuepress.vuejs.org/) - VuePress
* [Cloudflare](https://www.cloudflare.com) - Cloudflare

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.


## Authors

* **Petter Hoel** - [petterhoel](https://github.com/petterhoel/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

