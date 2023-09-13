import Veiculo from '../interfaces/Veiculo'

class Moto implements Veiculo {
	modelo: string
	anoFabricacao: number
	rodas: number
	passageiros: number
	marca: string

	constructor (modelo: string, anoFabricacao: number, passageiros: number, marca: string) {
		this.modelo = modelo
		this.anoFabricacao = anoFabricacao
		this.rodas = 2
		this.marca = marca
		if (passageiros >= 1 && passageiros <= 2) {
			this.passageiros = passageiros
		} else {
			throw new Error('O número de passageiros deve estar entre 1 e 2.')
		}
	}
}

export default Moto
