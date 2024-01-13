const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/index.html");
});

app.get('/contact', (req, res) => {
   res.sendFile(__dirname + '/public/contact.html')
})

app.get('/succes', (req, res) => {
   res.sendFile(__dirname + '/public/succes.html')
})

app.get('/card', (req, res) => {
   res.sendFile(__dirname + '/public/card.html')
})

app.get('/*', (req, res) => {
   res.sendFile(__dirname + '/public/404.html')
})