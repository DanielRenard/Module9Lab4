const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/asoiafs
// (the prefix from server.js)
// http://localhost:8081/api/asoiafs = GET all asoiafs
router.get("/", (req, res) => {
  Controllers.asoiafController.getAsoiafs(res);
});

// matches POST requests sent to /api/asoiafs/create
// http://localhost:8081/api/asoiafs/create = POST create a new asoiaf
// router.post("/create", (req, res) => {
//   Controllers.asoiafController.createAsoiaf(req.body, res);
// });

// // matches PUT requests to /api/asoiafs/123 (stores 123 in id param)
// // http://localhost:8081/api/asoiafs/:id = PUT update asoiaf by id
// router.put("/:id", (req, res) => {
//   Controllers.asoiafController.updateAsoiaf(req, res);
// });

// // matches DELETE requests to /api/asoiafs/123 (123 in id param)
// // http://localhost:8081/api/asoiafs/:id = DELETE destroys asoiaf by id
// router.delete("/:id", (req, res) => {
//   Controllers.asoiafController.deleteAsoiaf(req, res);
// });

module.exports = router;