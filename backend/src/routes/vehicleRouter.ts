import express from 'express'
import * as VehicleRouter from '../api/controller/vehiclesController'

const router = express.Router()

router.post('/', VehicleRouter.createVehicle)

export default router