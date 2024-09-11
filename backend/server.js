import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectDB from "./config/dbConfig.js";
import path from "path";
dotenv.config();

const allowedOrigins = ['https://zerodha-clone-blond.vercel.app'];
const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));



const PORT = process.env.PORT || 5000;


app.use("/api/v1/auth",authRoutes)

app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not found' });
});


app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))   
);




app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
    console.log(process.env.FRONTEND_URL);
    connectDB();
})