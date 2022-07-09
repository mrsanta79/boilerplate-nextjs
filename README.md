<p align="center">
  <a href="" rel="noopener">
 <!-- <img width=200px height=200px src="./public/icons/icon.svg" alt="Project logo"></a> -->
</p>

<h3 align="center">NextJS Quick Start Boilerplate</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()

</div>

---

<p align="center">This boilerplate will help you get started faster with everything setup already.</p>
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Prerequisites](#prerequisites)
- [Development](#deployment)
- [Deployment](#deployment)
- [Usage](#usage)
- [Authors](#authors)

## 📖 About <a name = "about"></a>

This NextJS Boilerplate provides a simplified experience for building a NextJS Application with pre-built components, hooks, providers and TailwindCSS already available for you out of the box.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the application on a live system.

## ✅ Prerequisites <a name = "prerequisites"></a>
What things you need to install the software and how to install them.

```
- NodeJS 16
- Yarn

or

- Docker
```

## 🚧 Development
```
- yarn install -d
- yarn dev
```

## 🚀 Deployment <a name = "deployment"></a>
###### Using Yarn
````
pm2 start yarn --name "app" -- start
````

###### Using Docker
````
INSTALL DOCKER
- https://docs.docker.com/get-docker/

BUILD & RUN
- sudo docker build -t nextjs_app .
- sudo docker run --name nextjs_app -p 3000:3000 --restart always -d nextjs_app

START ALREADY BUILT CONTAINER
- sudo docker start express_api_c

RELOAD WITH UPDATED FILES
- sudo docker restart express_api_c

AUTO START DOCKER DAEMON ON SYSTEM STARTUP
- sudo systemctl enable docker
- sudo service docker restart
````

## ✍️ Authors <a name = "authors"></a>

- [@mrsanta79](https://github.com/mrsanta79)