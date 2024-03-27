const router = require("express").Router();
const customerFileController = require("../controllers/customerFileController");

router.route("/").get(customerFileController.name);

module.exports = router;
