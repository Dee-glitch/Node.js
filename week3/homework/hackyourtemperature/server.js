const express = require("express");
const app = express();
const exphbs = require('express-handlebars');
const axios = require('axios');

// body parser middleware
//app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Handlebars middleware
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: false }));

app.get('/', (req, res) => res.status(200).render('index'));

app.post('/weather', (req, res) => {
  const apiKey = require('./sources/keys.json').API_KEY;
  const cityName = req.body.cityName;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&?units=metric&APPID=${apiKey}`;

  axios.get(url)
    .then(response => {
      const currentTemp = response.data.main.temp;
      const currentTempInCelsius = (currentTemp - 273.15).toFixed(1);

      res.status(200).render('index', {
        weatherText: `It's ${currentTempInCelsius} °C in ${cityName}`
      });
    })
    .catch(err => {
      res.status(400).render('index', {weatherText: 'City is not found!'});
    })
});

// Listen for requests
app.listen(3000);