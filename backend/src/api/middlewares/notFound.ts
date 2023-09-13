import { RequestHandler } from 'express'
import HttpException from '../errors/httpException'

const notFound: RequestHandler = (_req, _res, next) => {
	const err = new HttpException(404, 'Endpoint not found')
	next(err)
}

export default notFound