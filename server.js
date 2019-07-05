const express = require('express');
const app = express();
const sqlite = require("sqlite-async");
let database;
const init = async _ => {
  _.run("create table if not exists scores (id integer primary key autoincrement, name text, score integer)");
};
const getToken = _ => {
  const d = new Date;
  return (Math.floor(((d.getMonth() + d.getDate() + d.getMinutes()) / d.getFullYear()) * 10000) + "").padStart(4, "0");
};
app.use(express.static('public'));
const listener = app.listen(process.env.PORT || 8080, async _ => {
  database = await sqlite.open("database.db");
  init(database);
  console.log('Your app is listening on port ' + listener.address().port);
});
app.get("/", (req, res) => {
  res.send("UNIT-SERVER");
});
app.get('/push', async (req, res) => {
  if (req.query.name && req.query.score)
  {
    database.run("insert into scores(name, score) values(?, ?)", req.query.name, req.query.score);
    res.status(200).send("OK");
  }
  else
  {
    res.status(400).send("Bad Request")
  }
});
app.get("/load", async (req, res) => {
  data = await database.all("select * from scores order by score desc limit 10");
  let str = data.map(entry => entry.name + ":" + entry.score).join("\n");
  res.send(str);
});
app.get("/clear", async (req, res) => {
  if (req.query.token == getToken())
  {
    await database.run("drop table scores");
    await init(database);
    console.warn("database deleted by client")
    res.status(200).send("OK");
  }
  else
  {
    res.status(400).send("Bad Request");
  }
});