const knex = require('knex');

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

const db = knex(knexConfig);

module.exports = {
  getList,
  addWord,
  getWord
};

function getList() {
  return db('wordList');
}

function getWord(id) {
  return db('wordList').where({ id: Number(id) });
}

function addWord(word) {
  return db('wordList')
    .insert(word)
    .then(ids => ({ id: ids[0] }));
}
