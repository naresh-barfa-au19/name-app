const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { UserModel } = require("./database");
const nameValidation = require("./validation");
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors());

app.post("/formData", async (req, res) => {
  const errMsg = nameValidation(req.body.name);
  if (!errMsg) {
    const postData = new UserModel({ name: req.body.name });
    const dataPost = await postData.save();
    res.status(200).send({ dataPost });
  } else {
    res.status(200).send({ errMsg });
  }
});

app.get("/formData", async (req, res) => {
  const userData = await UserModel.find({});
  res.status(200).send(userData);
});
app.listen(port, console.log("server running on port : 4000"));
