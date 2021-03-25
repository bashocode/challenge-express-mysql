const express = require('express');
const heroRoutes = require('./routes/hero');

const app = express();
const port = 3000;

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies

app.use('/', heroRoutes);

app.listen(port, () => {
  console.log(`Listening on port`, port);
});
