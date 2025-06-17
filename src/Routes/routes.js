var router =require('express').Router();

const { userRegister }=require("../Controllers/userController");

router.post('/register', userRegister); 

module.exports = router;