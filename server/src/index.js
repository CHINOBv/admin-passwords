const express = require("express");
const app = express();

const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

const { startConnectionDB } = require("./db");
const { Routes } = require("./routes/routes");
app.use(Routes);

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended: true}))


startConnectionDB()
  .then((statusdbmessage) => {
    console.log(statusdbmessage);
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Server On Port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.error(error));
