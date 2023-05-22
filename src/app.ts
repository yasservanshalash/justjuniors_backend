import Express  from "express";
import jobRouter from './routes/jobs'
const app = Express();


app.use('/jobs', jobRouter)
export default app