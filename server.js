const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; 


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
