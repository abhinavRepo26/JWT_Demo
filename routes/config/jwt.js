const expressJwt = require("express-jwt");
const config = require("../../nodemon.json");

function jwt() {
  const { secret } = config;
  return expressJwt({ secret, algorithms: ["sha1", "RS256", "HS256"] }).unless({
    path: [
      // public routes that don't require authentication
      "/user/login",
    ],
  });
}

module.exports = jwt;
