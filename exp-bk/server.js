const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const db = {
  users: [],
  addUser: function (user) {
    this.users.push(user);
    return user;
  }
};

app.post("/api/register", async (req, res) => {
  const { email, name } = req.body;
  const newUser = db.addUser({
    email,
    name,
  });

  res.status(200).json({ message: "User registered", user: newUser });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
