const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  console.log(req.body);
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    progress: req.body.progress,
    death: req.body.death,
    password: bcrypt.hashSync(req.body.password, 8)
    
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

            res.json({ message: "user a bien enregistré !" });
          });
        }

exports.signin = (req, res) => {
  console.log(req.body);
  User.findOne({
    username: req.body.username
  })
    .then((user) => {

      if (!user) {
        res.status(404).json({ message: "user non trouver." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
         res.status(401).json({
          accessToken: null,
          message: "password invalide!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 43200 // 12 hours
      });

      res.json({
        id: user._id,
        username: user.username,
        email: user.email,
        progress: user.progress,
        death: user.death,
        accessToken: token
      });
    });
};

