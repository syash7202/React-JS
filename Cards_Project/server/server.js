require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/api/users", async (req, res) => {
  try {
    const results = await db.query("select * from user_details order by id");
    res.status(200).json({
      status: "success",
      results: results.rowCount,
      data: {
        users: results.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
