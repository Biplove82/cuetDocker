var router =require('express').Router();

const { userRegister, getalluser }=require("../Controllers/userController");

router.post('/register', userRegister); 
router.get("/get-user",getalluser);

module.exports = router;