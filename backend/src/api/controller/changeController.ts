import { RequestHandler } from 'express'
import HttpException  from '../errors/httpException'

export const changeChecker: RequestHandler = (req, res, next) => {
	const { purchaseValue, moneyHandedOver } = req.body

	try {
		if (!purchaseValue && !moneyHandedOver) throw new HttpException(400, 'Both inputs must be provided')

		if (typeof purchaseValue !== 'number' || typeof moneyHandedOver !== 'number')
			throw new HttpException(400, 'Inputs must be numbers')

		if (moneyHandedOver < purchaseValue) throw new HttpException(400, 'Money handed over value must be bigger than the purchase value')

		const fixedPurchase = purchaseValue.toFixed(2)
		const fixedMoneyHanded = moneyHandedOver.toFixed(2)
		const change = Number(fixedMoneyHanded) - Number(fixedPurchase)

		let bills100 = 0
		let bills10 = 0
		let bills1 = 0
		let cents = 0


		if(change >= 0) {
			let changeInReais = Math.floor(change)
			cents = (change - changeInReais) * 100

			if (changeInReais >= 100) {
				bills100 = Math.floor(change / 100)
				changeInReais %= 100
			}
      
			if (changeInReais >= 10) {
				bills10 = Math.floor(change / 10)
				changeInReais %= 10
			}
      
			bills1 = changeInReais
		}

		res.status(200).json({ bills1, bills10, bills100, purchaseValue: fixedPurchase, moneyHandedOver: fixedMoneyHanded, cents })

	} catch (error) {
		next(error)
	}
}