const shortid = require("shortid");
const Url = require("../models/url.model");

const handleGenerateNewShortURL = async (req, res) => {
  console.log(req.body.url);
  console.log(
    `URL:  ${req.url}, Method:  ${req.method}, Timestamp: ${new Date()}`
  );
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
  console.log(shortId);
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

module.exports = {
  handleGenerateNewShortURL,
  handleGetUrlById,
};
