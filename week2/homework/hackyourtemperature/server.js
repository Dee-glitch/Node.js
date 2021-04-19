const express = require("express");
const app = express();
const exphbs = require('express-handlebars');

app.use(express.json());

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: false }));

app.get('/', (req, res) => {
  res.render('index');
})

app.post("/weather", (req, res) => {
  const cityName = req.body.cityName;
  res.setHeader('content-type', 'application/json');
  res.send(cityName);
});

// Listen for requests
app.listen(3000);