const express = require('express'),
    http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishesRouter = require('./routes/dishesRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use('/dishes', dishesRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});