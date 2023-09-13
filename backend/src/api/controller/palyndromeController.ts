import { RequestHandler } from 'express'
import HttpException  from '../errors/httpException'

export const isPalyndrome: RequestHandler = async (req, res, next) => {
	const { start, end } = req.body

	try {
		if (!start && !end) throw new HttpException(400, 'Both inputs must be provided')

		if (typeof start !== 'number' || typeof end !== 'number')
			throw new HttpException(400, 'Inputs must be numbers')

		if (!Number.isInteger(start) || !Number.isInteger(end))
			throw new HttpException(400, 'Inputs must be integers')

		if (start < 0 || end < 0 )
			throw new HttpException(400, 'Inputs must be positive numbers')

		if (start === end)
			throw new HttpException(400, 'Inputs must be a valid range')

		if (start > end)
			throw new HttpException(400, 'The first number must be less than the last')

		const result = []

		for (let i = start; i <= end; i++) {
			const numToString = String(i)
			const reversedNum = numToString.split('').reverse().join('')
			if (numToString == reversedNum) {
				result.push(i)
			}
		}
		return res.status(200).json(result)
	} catch (error) {
		next(error)
	}
}