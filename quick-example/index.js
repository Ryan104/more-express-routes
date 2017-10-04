'use strict'
// requirements
const express = require('express');
let app = express();

let burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];

let tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco"
               ];

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.get("/burgers", function (req, res) {
    //send all the burgers     
    res.send(burgers.join(", "));
});

app.get('/burgers/:id', (req, res) => {
	res.send(burgers[req.params.id]);
});

app.get("/tacos", function (req, res) {
    //send all the tacos           
    res.send(tacos.join(", "));
});

app.get('/tacos/:id', (req, res) => {
	res.send(tacos[req.params.id]);
});

app.get('/pick_a_color/:color', (req, res) => {

	res.send('You picked: ' + req.params.color);
});

app.get('/pickanumber', (req, res) => {
	let guess = Number(req.query.number);
	const answer = 22;
	let msg = "";

	if (guess > answer){
		msg = "Too High!";
	} else if (guess < answer){
		msg = "Too Low!";
	} else {
		msg = "Nailed it!!!";
	}

	res.send(msg);
});

app.get('/multiply', (req, res) => {
	let mult = req.query.x * req.query.y;
	console.log(mult);
	res.send('Answer =' + mult);
});

app.get ('/add', (req, res) => {
	let add = Number(req.query.x) + Number(req.query.y);
	res.send('Answer =' + add);
});

app.listen(3000, () => { console.log("go to localhost:3000") });