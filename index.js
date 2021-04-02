const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');
const marked = require('marked');

const PORT = process.env.PORT || 3000;

const app = express();

const notes = require('./data/notes');

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.render('index', { notes });
});

app.get('/note/:id', (req, res) => {
  const { id } = req.params;
  const note = notes.find(n => n.id == id);
  const template = pug.compileFile('views/_note.pug');
  const markdown = marked(note.content);
  const markup = template({ note, markdown});
  res.send(markup);

});

app.get('/new', (req, res) => {
  const template = pug.compileFile('views/_new-note.pug');
  const markup = template({ });
  res.send(markup);
});

app.post('/preview', (req, res) => {
  const { draft } = req.body;
  const markup = marked(draft);
  res.send(markup);
});

app.post('/note', (req,res) => {
  console.log(req.body);
  const { title, draft } = req.body;
  const template = pug.compileFile('views/_note.pug');
  const markdown = marked(draft);
  const note = {
    title, 
    content: markdown
  };
  const markup = template({ note, markdown});
  res.send(markup);
});


app.listen(PORT);

console.log('Listening on port: ', PORT);
