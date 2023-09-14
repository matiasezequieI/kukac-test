import HttpException  from '../errors/httpException'
import axios from 'axios'

export const getCepInfo = async (cep: string) => {
	try {
		if (cep.length !== 8) throw new HttpException(400, 'Invalid CEP')

		const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
	
		if (!res.data) throw new HttpException(500, 'Something has gone wrong, try again')

		if (res.status == 400) throw new HttpException(400, 'Invalid CEP')
    
		if (res.data.erro) throw new HttpException(400, 'CEP not found')

		return {
			zip: res.data.cep,
			address: res.data.logradouro,
			neighborhood: res.data.bairro,
			city: res.data.localidade,
			state: res.data.uf
		}
	} catch (error) {
		if (error instanceof Error) {
			throw new HttpException(400, error.message)
		}
	}
}
