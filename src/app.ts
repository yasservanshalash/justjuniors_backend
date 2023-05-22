import Express  from "express";
import jobRouter from './routes/jobs'
import userRouter from './routes/users'
const app = Express()

app.use(Express.json())

app.use('/jobs', jobRouter)
app.use('/users', userRouter)
export default app