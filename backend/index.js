import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import mapRouter from './routes/mapRoutes.js'
import feedbackRouter from './routes/feedbackRoutes.js'


// app config
const app = express()
const port = process.env.PORT || 4000;

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// API endpoints
app.use("/api/map",mapRouter)
app.use("/api/feedback",feedbackRouter)


app.get('/',(req,res)=>{
    res.send("Api working")
})

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
})