const app = require("./app");
const { connectDB } = require("./db/connectMongoDB");
const PORT = 8085;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log(`Express server connection failed:: ${error} `);
    });
    app.listen(PORT, () => {
      console.log(`🚀Express app is running on ${PORT}`);
    });
  })
  .catch((error) => console.log(`MongoDB connection failed ${error}`));
