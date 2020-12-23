const db = require("../models");
const User = db.user;


exports.allAccess = (req, res) => {
  res.status(200).send("Contenue public.");
};

exports.userBoard = (req, res) => {
  User.findOne({
    _id:req.userId
  })
  .then(user =>
    {
      res.json(user)
    })

};

exports.deleteAll = (req, res) => {
  User.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} user were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all user."
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete user with id=${id}. Maybe user was not found!`
        });
      } else {
        res.send({
          message: "user was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete user with id=" + id
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update user with id=${id}. Maybe Tutorial was not found!`
        });
      } else res.send({ message: "user was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating user with id=" + id
      });
    });
};

exports.profile = (req, res) => {
  console.log(req.body);
  User.findOne({
    username: req.body.username
  })
    .then(( user) => {
  res.json({
    id: user._id,
    username: user.username,
    email: user.email,
    progress: user.progress,
    death: user.death,
  });
});
};

exports.hello = (req, res) => {
  res.json("Hello World");
}



