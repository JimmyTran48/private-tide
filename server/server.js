const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

//  routes
const api = require('./routes/api');

app.use(express.json());

app.use('/api', api);

app.get('/*', (_, res) => {
  return res.sendFile(path.resolve(_ - path.dirname, '../dist/index.html'));
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.message);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
