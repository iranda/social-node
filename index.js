const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/all', (req, res) => {
  res.send('sucess')
});

app.listen(3000);
