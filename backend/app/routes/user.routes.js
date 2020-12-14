const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

const db = require("../models");
const User = db.user;

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/all", controller.allAccess);
  app.delete("/", controller.deleteAll);
  app.delete("/:id", controller.delete);
  app.put("/:id", controller.update);
  app.get("/user", [authJwt.verifyToken], controller.userBoard);
  app.post("/profile", controller.profile);
  app.get("/hello", controller.hello);
};