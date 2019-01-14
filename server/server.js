const express = require('express');

var app = express();

app.get('/', (request, response) => {
    response.send("Hello World");
});

app.get('/user', (request, response) => {
    response.send({
        name: "Mukul Shakya",
        age: 20,
        skills: ["Java","Python","Node.js","HTML5","CSS3","JavaScript","jQuery"],
        location: "Agra"
    });
});

app.listen(3000, () => console.log("Listening on Port 3000"));

module.exports.app = app;