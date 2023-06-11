const router = require("express").Router();
const carCtrl = require("../controller/carController");
const userAuth=require('../middleware/auth')
const carValidation=require('../validations/carValidation')
const validate=require("../middleware/validation")


router.post("/create",  userAuth, validate(carValidation.add) ,carCtrl.add);
router.delete("/delete/:id", userAuth,validate(carValidation.remove) , carCtrl.delete);
router.patch("/update",  userAuth,validate(carValidation.update),carCtrl.update)
router.get("/getAll",userAuth, carCtrl.getAll)
router.get("/getAgainstCategory/:id",userAuth, validate(carValidation.getCategoryAgainstId) ,carCtrl.getAgainstCategory)

module.exports = router;