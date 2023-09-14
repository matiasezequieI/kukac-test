import { RequestHandler } from 'express'
import HttpException  from '../errors/httpException'
import Carro from '../../models/Carro'
import { join } from 'path'
import Moto from '../../models/Moto'
import { appendFile } from 'fs'
const vehicles: Carro[] & Moto[] = []


export const createVehicle: RequestHandler = async (req, res, next) => {
	const { type, model, year, doors, brand, passengers } = req.body

	try {
		if (type === 'CARRO') {
			if (doors !== 2 && doors !== 4) 
				throw new HttpException(400, 'Car must have 2 or 4 doors only')
			
			const car = new Carro(model, year, doors, brand)
			vehicles.push(car)
		}

		if(type == 'MOTO') {
			if (passengers !== 1 && passengers !== 2) 
				throw new HttpException(400, 'The number os passengers must be 1 or 2 only')
	
			const bike = new Moto(model, year, passengers, brand)
			vehicles.push(bike)
		}
		appendFile(join(__dirname, '../database', 'vehicles.json'), JSON.stringify(vehicles), (err) => {
			if (err) {
				console.log(err)
			} else {
				return res.sendStatus(201)
			}
		})
	} catch (error) {
		next(error)
	}
}