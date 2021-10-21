var express = require("express");
var router = express.Router();
var pool = require("./pool");
var jwt = require("jsonwebtoken");
var config = require("../nodemon.json");

// Login
router.post("/login", function (req, res, next) {
  const { Email, password } = req.body;
  var qry = `select * from user where Email='${Email}'`;
  pool.query(qry, function (error, result) {
    if (error) {
      return res.status(400).json([]);
    } else if (result[0]) {
      const token = jwt.sign({ sub: result[0].MobilePhone }, config.secret, {
        expiresIn: "2m",
      });
      return res.status(200).json({
        access_token: token,
        token_type: "Bearer",
        issued_at: new Date(),
        status: true,
        data: result,
      });
    } else {
      console.log("");
      return res
        .status(200)
        .json({ status: false, message: "Email Not Found.." });
    }
  });
});

module.exports = router;
