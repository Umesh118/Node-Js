const express = require('express'),
    http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishesRouter = require('./routes/dishesRouter');
const leaderRouter = require('./routes/leadersRouter');
const promotionRouter = require('./routes/promotionsRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use('/dishes', dishesRouter);
app.use('/promotions', promotionRouter);
app.use('/leaders', leaderRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});