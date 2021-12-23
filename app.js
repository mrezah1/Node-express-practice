const express = require("express");
const path = require("path");
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(adminRoute);
app.use(shopRoute);
app.use((req, res) => {
  res.status(404).send("<mark>Errrorrrr!</mark>");
});

app.listen(4000);
