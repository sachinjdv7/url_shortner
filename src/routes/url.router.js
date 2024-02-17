const express = require("express");
const router = express.Router();
const {
  handleGenerateNewShortURL,
  handleGetUrlById,
} = require("../controller/url.controller");

router.post("/", handleGenerateNewShortURL);
router.get("/:shortId", handleGetUrlById);
module.exports = router;
