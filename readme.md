# More Express:

| Objectives |
| :---- |
| Explain parsing URL params and using query string params |
| Apply routing knowledge to build an Express application with dynamic routes |
| Explain the usefulness of middleware (e.g., `body-parser`) |

## Pre-reading

* [HTTP Intro](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)

## Terminology

* HTTP
* Resource path
* Query string
* HTTP verb
* Status code
* Middleware

### Setup

Let's start with a simple **Express** application.

* Inside your fork of this repo, make a directory and `index.js`  

    ``` bash
    mkdir quick_example
    cd quick_example/
    touch index.js
    ```

* Then create a `package.json`, use the first line below or `npm init`.

    ``` bash
    echo {} > package.json      #puts an empty object into a new `package.json`
    npm install --save express
    subl .
    ```
The folder structure will be as follows:
```
/quick_example
    /node_modules
        /express
            ...
    index.js
    package.json

```

Now we need write some code for our simple application.


`index.js`

``` javascript
// requirements
var express = require('express'),
    app = express();

// a "GET" request to "/" will run the function below
app.get("/", function (req, res) {
    // send back the response: 'Hello World'
    res.send("Hello World");
});

// start the server
app.listen(3000, function () {
    console.log("Go to localhost:3000/");
});

```

Now you can start the server:

``` bash
node index.js
```

## What is Routing (RESTful review)?

Building an application will require us to have a firm grasp of something we call **routing**.  Each **route** is a combination of a **Request Type** and **Path**.

| Request Type | Request Path | Response
| :--- | :--- | :--- |
| `GET` | `/` | `Hello World` |
| `GET` | `/burgers` | `Hamburger`, `Cheese Burger`, `Dble Cheese Burger` |
| `GET` | `/tacos` | `Soft Taco`, `Crunchy Taco`, `Super Taco` |


Let's build these into our application:

`index.js`

``` javascript
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

app.listen(3000, function () {
    console.log("Go to localhost:3000/");
});

```

## Request (Url) Parameters

What if we want to create an app that can dynamically say hello to anyone?

* Using **url parameters** add a dynamic route to the application, indicated by `:` and the variable name you want to use, we'll use `:name` for the example below.

``` javascript
app.get("/greet/:name", function (req, res) {
    res.send( "Hello, " + req.params.name );
});
```

Here we are seeing the first introduction to parameters that the application can identify. In the following route `:name` is consider a route parameter. We can access it using `req.params.name`.

| Request Type | Request Path | Response
| :--- | :--- | :--- |
| `GET` | `/greet/:name` | `Hello, :name` |


## Query Params

Generally, you don't want to cram everything into a route. Just imagine when there are multiple parameters in route. Or maybe we don't care about getting the order of the parameters correct. Luckily, there are **query parameters** you can include with each request.

Let's see query params in action. Go to [https://google.com/search?q=kittens&tbm=isch](https://google.com/search?q=kittens&tbm=isch)

* `?` denotes the beginning of the query parameters
* `=` indicates an assignment; anything to the left is the key, while the right represents the value
* `&` allows for the input of multiple parameters, separating each

Let's add our first route to practice query params.

``` javascript
app.get("/thank", function (req, res) {
    var name = req.query.name;
    res.send("Thank you, " + name);
});
```

Reset your server and go to [localhost:3000/thank?name=jane](localhost:3000/thank?name=jane). Note how we can now define parameters in the url after a `?`.

## Middleware (Review)

What is middleware? [In terms of Express](http://expressjs.com/guide/using-middleware.html), middleware is a function with access to the request object (req), the response object (res), and the next middleware in the application’s request-response cycle, commonly denoted by a variable named next. In other words, **middleware is any kind of code that is executed after the request, but before the response returns to your function.** 

Middleware can:

* Execute any code.
* Make changes to the request and the response objects.
* End the request-response cycle.
* Call the next middleware in the stack.

You can create your own middleware, or use third-party modules. That's right, there are tons of useful middlewares that are already out there which you can use to handle common challenges like authentication, validations, and parsing.

The [`body-parser`](https://github.com/expressjs/body-parser) module is an example of some middleware that makes Express awesome. You can use it to parse out params from the POST'd form. This provides a different way to collect data instead of relying on URL or query params.

## Summary

We learned about

* Routing to different resources, i.e. `/burgers` and `/tacos`
* Using dynamic parameters, i.e. `/burgers/:index` and `/tacos/:index` to request specific data
* Using query parameters for dynamic requests to serve up dynamic responses
* What middleware is and why it is helpful


This will be essential knowledge for building and interacting with applications that contain multiple resources, such as users, posts, comments, etc.


## Exercises
Now let's jump into a routing challenge. Follow [this link][exercises] and complete them in your fork of this repo, then push all your changes up to your remote repo.

[exercises]:  exercises.md    "Express Routes"

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
