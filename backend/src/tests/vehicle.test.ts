import * as chai from 'chai'
import chaiHttp = require('chai-http');
chai.use(chaiHttp)
import { request } from 'chai'

import app  from '../app'

chai.use(chaiHttp)

const { expect } = chai

const carMock = {
	type: 'CARRO',
	doors: 4,
	year: 2016,
	model: 'Civic',
	brand: 'Chevrolet'
}

const carWrongMock = {
	type: 'CARRO',
	doors: 3,
	year: 2016,
	model: 'Civic',
	brand: 'Chevrolet'
}

const bikeMock = {
	type: 'MOTO',
	year: 2018,
	passengers: 1,
	model: 'Scooter',
	brand: 'Yamaha'
}

const bikeWrongMock = {
	type: 'MOTO',
	year: 2018,
	passengers: 3,
	model: 'Scooter',
	brand: 'Yamaha'
}

describe('Testes referentes ao desafio de Veiculos', () => {
	it('Retorna 200 OK em caso dos inputs do carro serem corretos', async () => {
		const response = await request(app).post('/vehicle').send(carMock)
		expect(response.status).to.be.equal(201)
	})

	it('Retorna 200 OK em caso dos inputs do carro serem incorretos', async () => {
		const response = await request(app).post('/vehicle').send(carWrongMock)
		expect(response.status).to.be.equal(400)
		expect(response.body.message).to.be.equal('Car must have 2 or 4 doors only')
	})

	it('Retorna 200 OK em caso dos inputs da moto serem corretos', async () => {
		const response = await request(app).post('/vehicle').send(bikeMock)
		expect(response.status).to.be.equal(201)
	})

	it('Retorna 200 OK em caso dos inputs da moto serem incorretos', async () => {
		const response = await request(app).post('/vehicle').send(bikeWrongMock)
		expect(response.status).to.be.equal(400)
		expect(response.body.message).to.be.equal('The number os passengers must be 1 or 2 only')
	})

})