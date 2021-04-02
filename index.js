const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();

const notes = [
  {
    id: 1,
    title: 'I wrote this note today',
    createdAt: '6:07 AM'
  },
  {
    id: 2,
    title: 'I wrote this note today',
    createdAt: '6:07 AM'
  },
  {
    id: 3,
    title: 'I wrote this note today',
    createdAt: '6:07 AM'
  },
  {
    id: 1,
    title: 'I wrote this note today',
    createdAt: '6:07 AM'
  },
  {
    id: 5,
    title: 'I wrote this note today',
    createdAt: '6:07 AM'
  },
]

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.render('index', { notes });
});


app.listen(PORT);

console.log('Listening on port: ', PORT);
