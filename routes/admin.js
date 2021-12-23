const express = require("express");
const path = require("path");
const router = express.Router();

const form = `
<form action="/add-product" method="POST">
    <input type="text" name="title"/>
    <button type="submit">Submit</button>
</form>
`;

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
