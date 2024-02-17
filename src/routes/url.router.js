const express = require("express");
const router = express.Router();
const { handleGenerateNewShortURL } = require("../controller/url.controller");

router.post("/", handleGenerateNewShortURL);
module.exports = router;
