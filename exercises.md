**Express Routing** -- Exercises

### Pick A Color
Create a route that responds with "You picked: blue" or "You picked: green" depending on the path. For instance, if I visit: `localhost:3000/pick_a_color/orange` I should see the the color I chose (randomly) named in the response.

### Which Taco (Indexing a Collection)

Hardcode some data in index.js:
``` javascript
    
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
```

* Write a route with to allow you to access a `taco` by it's index in the array, such that one could go to the route: "/taco/2" and get back a server response with the text "Super Taco".
* Write a route that allows you to access a `burger` by it's index in the array, same to above.

### The Number Guessing Game

* Build a simple number guessing game using query parameters.

``` javascript
app.get("/pickanumber", function (req, res) {
    var number = req.query.number;
    if (number === 7) {
        res.send("You picked " + number + "!");
    }
});
```

* When the user goes to `/pickanumber?number=10` the server should respond with either "Too High", "Too Low" or "Nailed it!"

## Stretch Exercises
### Calculator app (Using Query Parameters)

* Create a `/multiply` route that uses query params `x` and `y` to multiple two numbers and send the result back: `"10 is the result"`.
* Create an `/add` route, similar to above.
