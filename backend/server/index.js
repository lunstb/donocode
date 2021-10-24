const express = require("express");
const cors = require("cors");
const qrRouter = require("./routes/qrRoutes");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const database = require("../database/database")
require("dotenv").config();

const PORT = process.env.PORT || 3001;


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/qr", qrRouter);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.json({ message: "Hello world!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});