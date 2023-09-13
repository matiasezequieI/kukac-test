import express from 'express'
import * as ChangeController from '../api/controller/changeController'

const router = express.Router()

router.post('/', ChangeController.changeChecker)

export default router