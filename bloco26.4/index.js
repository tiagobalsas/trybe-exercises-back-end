const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const HTTP_OK = 200;
const PORT = 3001;
app.use(bodyParser.json());


app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  
  if (parseInt(age, 10) <= 17) {
    return res.status(401).json({ message: `Unauthorized` });
  }
  
  res.status(200).json({ message: `Hello, ${name}!` });
});

app.use((err, req, res, next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});
app.listen(PORT, HTTP_OK, () => console.log(`Server Online -> PORT ${PORT}`));
