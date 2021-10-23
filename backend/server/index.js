const express = require("express");
const cors = require("cors");

const qrRouter = require("./routes/qrRoutes");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");

const PORT = process.env.PORT || 3001;


const app = express();

app.use(cors());

app.use("/api/qr", qrRouter);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);



app.get("/", (req, res) => {
  res.json({ message: "Hello world!" });
});

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});