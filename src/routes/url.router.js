const express = require("express");
const router = express.Router();
const { handleGetUrl } = require("../controller/url.controller");

router.route("/").get(handleGetUrl);
module.exports = router;
