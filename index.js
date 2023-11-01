require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const twitterRouter = require("./routes/twitter");

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

app.use("/", twitterRouter);

const port = process.env.PORT || 3000;

async function bootstrap() {
  app.listen(port, () => {
    console.log("Starting", port);
  });
}

bootstrap();
