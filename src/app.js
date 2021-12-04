const express = require("express");
require("../src/db/connection");
const router = require('../src/routers/mens');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.get("/", async (req, res) => {
  res.send("Hello from Anshu");
});

//--------------------------------------------------------
// Router CODE

//-------------------------------------------------------

app.listen(port, () => {
  console.log("Connected at ", port);
});
