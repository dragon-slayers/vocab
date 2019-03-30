const express = require('express');
const knex = require('knex');
const router = express.Router();

const knexConfig = {
  client: 'sqlite3',
  connection: {
    filename: './data/vocabulary.db3'
  },
  useNullAsDefault: true, // needed for sqlite
  migrations: {
    directory: './data/migrations'
  }
};

const db = require('../data/db');

router.get('/', async (req, res) => {
  list = await db.getList();
  res.status(200).json(list);
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const word = await db.getWord(id);
    res.status(200).json(word);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.post('/', async (req, res) => {
  try {
    const newWord = req.body;
    db.addWord(newWord);
    res.status(201).json(newWord);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
