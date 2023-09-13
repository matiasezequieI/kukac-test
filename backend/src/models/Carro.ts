import Veiculo from '../interfaces/Veiculo'

class Carro implements Veiculo {
	modelo: string
	anoFabricacao: number
	quantidadePortas: number
	marca: string

	constructor (modelo: string, anoFabricacao: number, quantidadePortas: number, marca: string) {
		this.modelo = modelo
		this.anoFabricacao = anoFabricacao
		this.marca = marca
		if (quantidadePortas >= 2 && quantidadePortas <= 4) {
			this.quantidadePortas = quantidadePortas
		} else {
			throw new Error('A quantidade de portas deve estar entre 2 e 4.')
		}
	}
}

export default Carro
