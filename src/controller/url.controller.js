const shortid = require("shortid");
const Url = require("../models/url.model");

const handleGenerateNewShortURL = async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });

  const shortId = shortid();

  await Url.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortId });
};

const handleGetUrlById = async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await Url.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  res.redirect(entry.redirectURL);
};

const handleGetUrlClicks = async (req, res) => {
  const shortId = req.params.shortId;
  const result = await Url.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
};

module.exports = {
  handleGenerateNewShortURL,
  handleGetUrlById,
  handleGetUrlClicks,
};
