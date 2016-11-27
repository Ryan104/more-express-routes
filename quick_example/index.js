var express = require('express')
var app = express();



var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];

var tacos = [
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

app.get("/tacos", function (req, res) {
    //send all the tacos           
    res.send(tacos.join(", "));
});

app.get("/greet/:name", function (req, res) {
    res.send( "Hello, " + req.params.name );
});

app.get("/thank", function (req, res) {
    var name = req.query.name;
    res.send("Thank you, " + name);
});


app.get("/pick_a_color/:color", function (req, res) {
    res.send( "You picked: " + req.params.color );
});

app.get("/taco/:tacoIndex", function (req, res) {
    res.send( tacos[req.params.tacoIndex] );
});

app.get("/burger/:burgerIndex", function (req, res) {
    res.send( burgers[req.params.burgerIndex] );
});

app.get("/pickanumber", function (req, res) {
    var number = req.query.number;
    if (number === 7) {
        res.send("You picked " + number + "! Nailed it!");
    } else if (number < 7) {
        res.send(number + " is too low. Sorry.");
    } else if (number > 7) {
        res.send(number + " is too high!");
    }
});


app.get("/multiply", function (req, res) {
    var multNumberOne = req.query.multNumberOne;
    var multNumberTwo = req.query.multNumberTwo;
    res.send(multNumberOne * multNumberTwo);
});

app.get("/add", function (req, res) {
    var addNumberOne = parseInt(req.query.addNumberOne);
    var addNumberTwo = req.query.addNumberTwo;
    res.send(addNumberOne);
});


app.listen(3000, function () {
    console.log("Go to localhost:3000/");
});
