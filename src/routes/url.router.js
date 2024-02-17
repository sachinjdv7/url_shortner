const express = require("express");
const router = express.Router();
const {
  handleGenerateNewShortURL,
  handleGetUrlById,
  handleGetUrlClicks,
} = require("../controller/url.controller");

router.post("/", handleGenerateNewShortURL);
router.get("/:shortId", handleGetUrlById);
router.get("/analytics/:shortId", handleGetUrlClicks);
module.exports = router;
