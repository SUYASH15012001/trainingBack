import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
// testUser
// testUser1234

// Routes
import userRoutes from "./routes/user.js";

// APP initialising
const app = express();

const PORT = 5000;

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const MONGO_URL =
  "mongodb+srv://testUser:testUser1234@cluster0.wfmr4ml.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to the MongoDB");
    app.listen(PORT, () => {
      console.log(`server running on ${PORT}`);
    });
  })
  .catch((err) => console.log(err, "\n err in connection"));

app.use("/user", userRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });
