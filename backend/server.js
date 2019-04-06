const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const listRouter = require('./routes/listRouter');
const server = express();

server.use(bodyParser.json());
server.use(cors());
server.get('/', async (req, res) => {
  res.status(200).json('hello');
});
const port = process.env.PORT || 5000;
server.use('/api', listRouter);
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
