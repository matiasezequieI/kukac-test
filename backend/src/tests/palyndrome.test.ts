import * as chai from 'chai'
import chaiHttp = require('chai-http');
chai.use(chaiHttp)
import { request } from 'chai'

import app  from '../app'

chai.use(chaiHttp)

const { expect } = chai

const correctMock = {
	start: 0,
	end: 205
}

const wrongMock = {
	start: '0',
	end: 205
}

const floatMock = {
	start: 0.5,
	end: 10.5
}

const negativeMock = {
	start: -1,
	end: -5
}

const rangeMock = {
	start: 5,
	end: 5
}

const biggerMock = {
	start: 5,
	end: 1
}

const emptyMock = {
	start: '',
	end: ''
}

describe('Testes referentes ao desafio Palindromo', () => {

	it('Retorna 200 OK em caso dos inputs serem corretos', async () => {
		const response = await request(app).post('/palyndrome').send(correctMock)
		expect(response.status).to.be.equal(200)
	})

	it('Deve retornar mensagem de erro caso um dos inputs não seja um número', async () => {
		const response = await request(app).post('/palyndrome').send(wrongMock)
		expect(response.status).to.be.equal(400)
		expect(response.body.message).to.be.equal('Inputs must be numbers')
	})

	it('Deve retornar mensagem de erro caso os inputs não sejam inteiros', async () => {
		const response = await request(app).post('/palyndrome').send(floatMock)
		expect(response.status).to.be.equal(400)
		expect(response.body.message).to.be.equal('Inputs must be integers')
	})

	it('Deve retornar mensagem de erro caso os inputs não sejam numeros positivos', async () => {
		const response = await request(app).post('/palyndrome').send(negativeMock)
		expect(response.status).to.be.equal(400)
		expect(response.body.message).to.be.equal('Inputs must be positive numbers')
	})

	it('Deve retornar mensagem de erro caso os inputs não sejam numeros estejam um range valido', async () => {
		const response = await request(app).post('/palyndrome').send(rangeMock)
		expect(response.status).to.be.equal(400)
		expect(response.body.message).to.be.equal('Inputs must be a valid range')
	})

	it('Deve retornar mensagem de erro caso o primeiro numero seja maior que o segundo', async () => {
		const response = await request(app).post('/palyndrome').send(biggerMock)
		expect(response.status).to.be.equal(400)
		expect(response.body.message).to.be.equal('The first number must be less than the last')
	})

	it('Deve retornar mensagem de erro caso os inputs não sejam informados', async () => {
		const response = await request(app).post('/palyndrome').send(emptyMock)
		expect(response.status).to.be.equal(400)
		expect(response.body.message).to.be.equal('Both inputs must be provided')
	})

})