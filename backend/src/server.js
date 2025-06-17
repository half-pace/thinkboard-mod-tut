import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
    origin: "http://localhost:5173",
}));
app.use(express.json()); //middleware
app.use(rateLimiter);


// app.use((req, res, next) => {
//     console.log("We just got a new req");
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on port:", PORT);
    });
});



