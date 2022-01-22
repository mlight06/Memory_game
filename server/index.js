const express = require('express');
const path = require('path');

const PORT = 3100;

const app = express();

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
