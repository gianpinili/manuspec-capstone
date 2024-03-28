const router = require("express").Router();
const profileController = require("../controllers/profileController");

router
  .route("/")
  .get(profileController.index)
  .post(profileController.addProfile);

router
  .route("/:id")
  .get(profileController.singleProfile)
  .patch(profileController.updateProfile)
  .delete(profileController.deleteProfile);
module.exports = router;
