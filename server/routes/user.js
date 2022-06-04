const express = require('express');
// const { editUser } = require('../../client/src/service/api.js');

const {
    CreateUser,
    GetAllUsers,
    getUser,
    editUser,
    deleteUser,
} = require('../controllers/user.js');

const router = express.Router();

// CREATE
router.post('/', CreateUser);

//GET
router.get('/all', GetAllUsers);

router.get('/:id', getUser);

//UPDATE
router.put('/:id', editUser);

//DELETE
router.delete('/:id', deleteUser);

module.exports = router;
