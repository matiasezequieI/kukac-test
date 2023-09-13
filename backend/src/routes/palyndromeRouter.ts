import express from 'express'
import * as PalyndromeController from '../api/controller/palyndromeController'

const router = express.Router()

router.post('/', PalyndromeController.isPalyndrome)

export default router