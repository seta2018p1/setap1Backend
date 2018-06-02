const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
var bookings = require('./mongoDB');
const PORT = process.env.PORT || 5000
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index'));
app.use('/api', bookings);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
  

  