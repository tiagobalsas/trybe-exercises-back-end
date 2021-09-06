const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const HTTP_OK = 200;
const PORT = 3001;
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(PORT, HTTP_OK, () => console.log(`Server Online -> PORT ${PORT}`));
