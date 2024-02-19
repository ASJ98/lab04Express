// import express module as express
const express = require("express");

// create express application (instance of express module (blueprint for an application))
const app = express();

// create array of tv show objects
const tvshows = [
  {
    name: "The Traitors",
    type: "Game Show",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/499/1248534.jpg",
  },
  {
    name: "Bodies",
    type: "Scripted",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/482/1205619.jpg",
  },
  {
    name: "The English",
    type: "Scripted",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/444/1112100.jpg",
  },
];

// SET THE ROUTES

app.get("/", (req, res) => {
  // As app is a JavaScript file we can work dynamically!
  let toy = { name: "snot", toy_type: "puppet", colour: "pink and white" };
  res.send(`<h2>My Toys</h2><p>My toy is called ${toy.name} and it's a 
                ${toy.toy_type}.</p>`);
});

app.get("/tv", (req, res) => {
  let html = "<h2>My TV</h2>";

  tvshows.forEach((tv) => {
    html += `<p>${tv.name}</p>` + `<img src="${tv.image}" alt="">`;
  });

  res.send(`${html}`);
});

// GET APP TO LISTEN TO A GIVEN CHANNEL OF COMMUNICATION (the express app.listen() function
// creates and binds an html server to the application automatically in the background)
// this enables to app to serve files and listen for requests
app.listen(process.env.PORT || 3000);
// .listen is going to bind the application to the port on our machine or an
// environmental variable called PORT

console.log(` Server is listenin//localhost:3000/ `);
