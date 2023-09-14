import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import errorHandler from './api/middlewares/errorHandler'
import notFound from './api/middlewares/notFound'
import palyndromeRouter from './routes/palyndromeRouter'
import changeRouter from './routes/changeRouter'
import vehicleRouter from './routes/vehicleRouter'
import cepRouter from './routes/cepRouter'



const app = express() 

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/palyndrome', palyndromeRouter)
app.use('/change', changeRouter)
app.use('/vehicle', vehicleRouter)
app.use('/cep', cepRouter)


app.use(notFound)
app.use(errorHandler)

export default app