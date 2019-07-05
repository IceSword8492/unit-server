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
app.get("/load", (req, res) => {
  res.send(`name1:40000
name2:30000
name3:20000
name4:10000
name5:7000
name6:5000
name7:4000
name8:3000
name9:2000
name10:10`);
});