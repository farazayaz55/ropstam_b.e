const router = require("express").Router();
const categoriesCtrl = require("../controller/categoriesController");
const userAuth=require('../middleware/auth')
const validate=require('../middleware/validation')
const categoriesValidation=require('../validations/categoriesValidation')

router.post("/create",userAuth,validate(categoriesValidation.add), categoriesCtrl.add);
router.delete("/delete/:id",userAuth,validate(categoriesValidation.remove), categoriesCtrl.delete);
router.patch("/update",userAuth,validate(categoriesValidation.update), categoriesCtrl.update)
router.get("/getAll",userAuth, categoriesCtrl.getAll)

module.exports = router;