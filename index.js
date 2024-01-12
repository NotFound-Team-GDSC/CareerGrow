import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import route from './routes/route.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json())
app.use(route);

// store.sync();

app.get("/", (req, res) => {
    console.log("Response success")
    res.send("Response Success!")
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server is up and listening on " + PORT)
})
