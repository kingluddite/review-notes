const fs = require('fs');
const router = require('express').Router();
const shortid = require('shortid');
// const path = require('path');
const { log } = require('util');

router.get('/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    console.log(notes);
    res.json(notes);
  });
});

router.post('/notes', (req, res) => {
  const note = { title: req.body.title, text: req.body.text, id: shortid.generate() };

  fs.readFile('./db/db.json', (err, data) => {
    if (err) throw err;
    const noteString = JSON.parse(data);
    noteString.push(note);
    const newData = JSON.stringify(noteString);

    fs.writeFile('./db/db.json', newData, (err) => {
      if (err) throw err;
      res.json(newData);
    });
  });
});

module.exports = router;
