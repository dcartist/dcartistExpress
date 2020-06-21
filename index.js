const express = require("express");
const cors = require("cors");
const app = express();
const parser = express.json();
app.use(express.json());

app.use(cors());
// app.use(express.json().urlencoded({ extended: true }));
// app.use(parser)
app.get("/", (req, res) => {
  res.send("Welcome to trial");
});


app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`${app.get("port")} works`);
});
