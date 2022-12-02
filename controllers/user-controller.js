const { User } = require('../models/User');

const userController = {
// get all users
getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
// GET a single user by its _id and populated thought and friend data
getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
// POST a new user
createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
// PUT to update a user by its _id
updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
// DELETE to remove user by its _id
deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : User.deleteMany({ _id: { $in: user.applications } })
      )
      .then(() => res.json({ message: 'User and associated thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
// add a new friend
addFriend(req, res) {
     User.create(req.body)
      .then((post) => {
        return User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { posts: post._id } },
        { new: true }
        );
    })
      .then((user) =>
        !user
        ? res.status(404).json({ message: 'No friends with that Id' })
        : res.json('Youre friends 🎉')
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },
// delete a friend
removeFriend(req, res) {
    User.create(req.body)
     .then((post) => {
       return User.findOneAndUpdate(
       { _id: req.body.userId },
       { $pull: { posts: post._id } },
       { new: true }
       );
   })
     .then((user) =>
       !user
       ? res.status(404).json({ message: 'No friends with that Id' })
       : res.json('Friend removed')
         )
         .catch((err) => {
           console.log(err);
           res.status(500).json(err);
         });
     },
};

module.exports = userController;