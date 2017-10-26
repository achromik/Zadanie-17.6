const express = require('express');

let app = express();

//Set PUG as template engine
app.set('view engine', 'pug');
app.set('views');


//prefix for static files based on 
// https://gist.github.com/joepie91/c0069ab0e0da40cc7b54b8c2203befe1
 app.use('/static', express.static("assets"));
//app.use(express.static("assets"));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/auth/google', (req, res) => {
    res.render('logged');
});

app.use((req, res, next) => {
    res.status(404).send('Sorry! Object not found  :( ');
});

var server = app.listen(3000);
