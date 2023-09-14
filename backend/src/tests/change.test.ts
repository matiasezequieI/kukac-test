import * as chai from 'chai'
import chaiHttp = require('chai-http');
chai.use(chaiHttp)
import { request } from 'chai'

import app  from '../app'

chai.use(chaiHttp)

const { expect } = chai

const correctMock = {
	purchaseValue: 100,
	moneyHandedOver: 200
}

const stringMock = {
	purchaseValue: '100',
	moneyHandedOver: '200'
}

const wrongMock = {
	purchaseValue: 200,
	moneyHandedOver: 100
}

describe('Testes referentes ao desafio de Troco dinheiro', () => {
	it('Retorna 200 OK em caso dos inputs serem corretos', async () => {
		const response = await request(app).post('/change').send(correctMock)
		expect(response.status).to.be.equal(200)
	})

	it('Deve retornar mensagem de erro caso um dos inputs não seja um número', async () => {
		const response = await request(app).post('/change').send(stringMock)
		expect(response.status).to.be.equal(400)
		expect(response.body.message).to.be.equal('Inputs must be numbers')
	})

	it('Deve retornar mensagem de erro caso o valor fornecido seja menor que o valor da compra', async () => {
		const response = await request(app).post('/change').send(wrongMock)
		expect(response.status).to.be.equal(400)
		expect(response.body.message).to.be.equal('Money handed over value must be bigger than the purchase value')
	})

})