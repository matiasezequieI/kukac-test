import express from 'express'
import * as CepController from '../api/controller/cepController'

const router = express.Router()

router.get('/', CepController.getInfo)

export default router