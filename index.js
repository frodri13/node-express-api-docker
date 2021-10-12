const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.json([
    {
      name: "Fabio",
      email: "fabio@test.com",
    },
    {
      name: "sara",
      email: "sara@test.com",
    },
    {
      name: "aisha",
      email: "aisha@test.com",
    },
    {
      name: "nicolas",
      email: "nicolas@test.com",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
