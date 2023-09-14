'use client'
import axios from 'axios'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const Cep = () => {
  type cep = {
    id: number
    zip: string,
    address: string
    neighborhood:string
    city: string
    state:string
    message?: string,
  }

  const [count, setCount] = useState(1)
  const [btnIsEnabled, setBtnIsEnabled] = useState(true)
  const [inputIsEnabled, setInputIsEnabled] = useState(true)
  const [cepInput, setCepInput] = useState('')
  const [cepList, setCepList] = useState<string[]>([])
  const [cepResult, setCepResult] = useState<cep[] | null>([])

  const handleSubmit = async () => {
    setCepList([...cepList, cepInput])
    setCount(count + 1)
    setCepInput('')
    await handleSearch(cepList)
  }

  const handleSearch = async (cepList: string[]) => {
    const newDataList:cep[] = []

    await Promise.all(
      cepList.map(async (cep, index) => {
        try {
          const { data } = await axios.get('http://localhost:3001/cep', { params: { cep } })
          newDataList.push({ ...data, id: index + 1 })
        } catch (error) {
          if (axios.isAxiosError(error)) {
            if (error.response) {
              newDataList.push(error.response.data)
            }
            console.log('error message: ', error)
          } else {
            console.log('unexpected error: ', error)
          }
        }
      })
    )
    const orderedResult = newDataList.sort((a, b) => a.id - b.id)
    setCepResult(orderedResult)
  }

  useEffect(() => {
    const handleCount = async () => {
      if (count > 5) {
        setBtnIsEnabled(false)
        setInputIsEnabled(false)
        await handleSearch(cepList)
      }
    }
    handleCount()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  return (
    <div className='h-screen min-h-screen min-w-full bg-custom-green flex justify-center items-center'>
      <div className='bg-slate-100 w-5/6 h-5/6 flex justify-between rounded-md overflow-hidden shadow-md'>
        <div className='border-r-2 border-r-slate-300 flex flex-col justify-evenly items-center w-1/2 px-4'>
          <h1 className='text-4xl text-center mt-6 font-bold text-slate-600'>Enter 5 ZIP codes and get information about them</h1>
          <label htmlFor='search' className='text-2xl text-center font-bold text-slate-500 mt-8 px-2'>Enter CEP nº {count > 5 ? '5' : count}</label>
          <div>
            <Image
              className='w-auto h-auto'
              priority
              src='/location-image.png'
              alt='location icon'
              width={100}
              height={100}
            />
          </div>
          <div>
            <input
              type='text'
              className='px-2 py-1.5 mb-6 border-2 min-w-full border-slate-300 rounded-sm focus:outline-none text-slate-700'
              onChange={(e) => setCepInput(e.target.value)}
              disabled={!inputIsEnabled}
              value={cepInput}
            />
            <button
              className='text-center font-bold text-white min-w-full bg-blue-700  hover:bg-blue-800 rounded-md px-3 py-1.5'
              disabled={!btnIsEnabled}
              onClick={handleSubmit}
            >
              SEARCH
            </button>
          </div>
        </div>
        <div className='flex flex-col justify-around items-center w-3/4'>
          <div className='w-9/12'>

            {cepResult?.length === 5 && cepResult.map((item) => (
              <div key={item.id} className='border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-2 my-1.5'>
                {item.id
                  ? (
                    <div>
                      <h2>Endereço nº {item.id}</h2>
                      <p>CEP: {item.zip}</p>
                      <p>Endereço: {item.address}</p>
                      <p>Bairro: {item.neighborhood}</p>
                      <p>Cidade: {item.city}</p>
                      <p>Estado: {item.state}</p>
                    </div>
                    )
                  : <div>{item.message && <p>{item.message}</p>}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cep
