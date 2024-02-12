const express = require("express");
const users = require("./routes/user-routes");
const mongoose = require("mongoose");
const app = express();
const SERVER_PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/",users);

mongoose.connect("mongodb+srv://ahmetbuyukbas:Yozgatlim38@cluster0.edf73am.mongodb.net/register?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(SERVER_PORT, () => {
  console.log(`Server running at http://localhost:${SERVER_PORT}/`);
  console.log("Press CTRL + C to stop server");
});
