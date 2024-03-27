const router = require("express").Router();
const customersController = require("../controllers/customersController");

router.route("/").get(customersController.name);

module.exports = router;
