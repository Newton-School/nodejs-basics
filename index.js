const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const v1Routes = require("./routes/v1");

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1", v1Routes);

app.use("*", (__, res) => {
  res.render("404", { pageTitle: "Page Not Found" });
});

app.listen(PORT, () => console.info(`Listening at port: ${PORT}`));
