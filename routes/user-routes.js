const router = require('express').Router();

const {

    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser

} = require('../controllers/user-controller');

