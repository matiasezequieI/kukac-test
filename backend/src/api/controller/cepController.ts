import { RequestHandler } from 'express'
import { getCepInfo } from '../network/CepApi'

export const getInfo: RequestHandler = async (req, res, next) => {
	const { cep } = req.query

	try {
		const data = await getCepInfo(cep as string)
		return res.status(200).json(data)
	} catch (error) {
		next(error)
	}
}
