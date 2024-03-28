const router = require("express").Router();
const customersController = require("../controllers/customersController");

router
  .route("/")
  .get(customersController.index)
  .post(customersController.addCustomer);

router
  .route("/:id")
  .get(customersController.singleCustomer)
  .patch(customersController.updateCustomer)
  .delete(customersController.deleteCustomer);

module.exports = router;
