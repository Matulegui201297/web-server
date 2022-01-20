require('dotenv').config();
const express = require ('express');
const app = express();
const port = process.env.port || 3000 ;


app.use(express.static(__dirname+ '/public'));

app.get('/', function (req, res) {
  res.send('GET method received')
});

app.post('/', function (req, res) {
  res.send('POST method received')
});

app.listen(port, () => {
  console.log(`Server sarted on ${port}`)
});