const express = require('express');
const app = express();
const axios = require('axios');

app.get(':endpoint([\\/\\w\\.-]*)', function (res, req) {
  axios.get('https://www.ellos.se/api' + req.params.endpoint)
  res.send('Got it');
})

app.listen(3000);

