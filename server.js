const express = require('express');
const app = express();
app.use(express.static('public'));
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.get("/", (req, res) => {
  res.send("UNIT-SERVER");
});
app.get('/push', function(req, res) {
  res.send(`received:
  name: ${req.query.name}
  score: ${req.query.score}`);
});