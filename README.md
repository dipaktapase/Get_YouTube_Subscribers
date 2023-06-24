# Project Title

### Get YouTube Subscribers

<img src="/public/Desktop.png" alt="desktopImg" width="900">

## Deployed Link

https://get-you-tube-subscribers-dipaktapase.vercel.app/

## Content

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies-and-tools)
- [Installation and Setup](#installation-and-setup)
- [API Endpoints](#api-endpoints)

## Introduction

Get YouTube subscribers is a backend project that is designed to fetch data using APIs. In this project, we use technologies like ExpressJs, NodeJs, and MongoDB.
Users can see all subscribers and their information like their name, and the channel they subscribed to in JSON format. Users can either select the page which is displayed on the home or can enter the URL manually.

## Features

- Users can get all the subscribers.
- Users can fetch only names and subscribed channels.
- Users can search subscribers by their id.

## Technologies and Tools

- ExpressJs
- MongoDB
- Mongoose
- NodeJs
- HTML
- CSS

## Installation and Setup

Clone down this repository using `git clone`. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm run start`

To Visit App:

`localhost:3000/`

## API Endpoints

1. GET http://localhost:3000/ → Returns home page where all routes are mentioned with the interactive layout. 

2. GET http://localhost:3000/subscribers → Returns an array containing all the subscribers stored in the database.

3. GET http://localhost:3000/subscribers/names → Returns an array of subscribers with only two fields name and subscribedChannel

4. GET http://localhost:3000/subscribers/:id → Returns the details of a subscriber based on the provided ID.

5. GET http://localhost:3000/subscribers/random-id → Error management for invalid ID.

6. GEt http://localhost:3000/something → Returns error message of Page Not Found.


## Note

<p> This capstone project is associated with <a href="https://www.almabetter.com">Almabetter</a>.</p>
