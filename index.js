const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.render('index');
});


app.listen(PORT);

console.log('Listening on port: ', PORT);
