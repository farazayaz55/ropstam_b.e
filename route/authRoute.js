const router = require("express").Router();
const userCtrl = require("../controller/userController");
const authValidation=require('../validations/authValidation')
const validate=require("../middleware/validation")
router.post("/sign-in",validate(authValidation.signIn) ,userCtrl.signIn);
router.post("/sign-up",validate(authValidation.signUp), userCtrl.signUp);
router.post("/refresh-token",userCtrl.refreshToken)
module.exports = router;
