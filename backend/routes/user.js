const express = require('express')

// controller functions
const { loginUser, signupUser } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

module.exports = router