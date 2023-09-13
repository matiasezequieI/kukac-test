import { ErrorRequestHandler } from 'express'
import HttpException from '../errors/httpException'

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
	console.log(err)
	if (err instanceof HttpException) {
		return res.status(err.status).json({message: err.message, stack: err.stack})
	}
	return res.status(500).json({ message: 'Something went wrong, please try again' })
}

export default errorHandler
