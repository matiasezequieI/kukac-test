'use client'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'

const Vehicle = () => {
  const [selected, setSelected] = useState('CARRO')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [doors, setDoors] = useState('2')
  const [brand, setBrand] = useState('')
  const [passengers, setPassengers] = useState('1')
  const [haveError, setHaveError] = useState(false)
  const [messageError, setMessageError] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleRegister = async (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3001/vehicle', { type: selected, model, year, doors: Number(doors), brand, passengers: Number(passengers) }, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
      if (res.status === 201) {
        setHaveError(false)
        setMessageError('')
        setIsSuccess(true)
        setModel('')
        setYear('')
        setBrand('')
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setIsSuccess(false)
          setHaveError(true)
          setMessageError(error.response?.data.message)
        }
        console.log('error message: ', error)
      } else {
        console.log('unexpected error: ', error)
      }
    }
  }

  return (
    <div className='h-screen min-h-screen min-w-full bg-custom-green flex justify-center items-center'>
      <div className='bg-slate-100 w-1/2 h-3/5 flex justify-between rounded-md overflow-hidden shadow-md'>
        <div className='border-r-2 border-r-slate-200 flex flex-col justify-evenly items-center w-1/2 px-4'>
          <div>
            <Image
              priority
              src='/car-image.png'
              alt='red car image'
              width={250}
              height={250}
            />
          </div>
          <div>
            <h1 className='text-base text-center text-slate-500 font-bold'>
              Register your new vehicle!
            </h1>
          </div>
        </div>
        <div className='flex flex-col justify-around items-center w-3/4'>
          <form
            className='space-y-6'
          >
            <div>
              <label htmlFor='vehicle' className='text-base text-slate-500 font-bold'>
                Select vehicle type
              </label>
              <select
                id='veiculo'
                onChange={(e) => setSelected(e.target.value)}
                value={selected}
                className='px-2 py-1.5 my-2 border-2 min-w-full border-slate-300 rounded-sm focus:outline-none text-slate-700'
              >
                <option value='CARRO'>CARRO</option>
                <option value='MOTO'>MOTO</option>
              </select>
            </div>
            {selected === 'CARRO'
              ? (
                <div>
                  <label htmlFor='model' className='font-bold text-slate-600'>
                    Modelo
                  </label>
                  <div>
                    <input
                      type='text'
                      className='px-2 py-1.5 my-2 border-2 min-w-full border-slate-300 rounded-sm focus:outline-none text-slate-700'
                      onChange={(e) => setModel(e.target.value)}
                      value={model}
                    />
                  </div>
                  <label htmlFor='year' className='font-bold text-slate-600'>
                    Ano de fabricação
                  </label>
                  <div>
                    <input
                      type='number'
                      className='px-2 py-1.5 my-2 border-2 min-w-full border-slate-300 rounded-sm focus:outline-none text-slate-700'
                      onChange={(e) => setYear(e.target.value)}
                      value={year}
                    />
                    <label htmlFor='vehicle' className='text-base text-slate-500 font-bold'>
                      Car doors
                    </label>
                    <select
                      id='doors'
                      onChange={(e) => setDoors(e.target.value)}
                      value={doors}
                      className='px-2 py-1.5 my-2 border-2 min-w-full border-slate-300 rounded-sm focus:outline-none text-slate-700'
                    >
                      <option value='2'>2</option>
                      <option value='4'>4</option>
                    </select>
                  </div>
                  <label htmlFor='brand' className='font-bold text-slate-600'>
                    Brand
                  </label>
                  <div>
                    <input
                      type='text'
                      className='px-2 py-1.5 my-2 border-2 min-w-full border-slate-300 rounded-sm focus:outline-none text-slate-700'
                      onChange={(e) => setBrand(e.target.value)}
                      value={brand}
                    />
                  </div>
                </div>
                )
              : (
                <div>
                  <label htmlFor='model' className='font-bold text-slate-600'>
                    Modelo
                  </label>
                  <div>
                    <input
                      type='text'
                      className='px-2 py-1.5 my-2 border-2 min-w-full border-slate-300 rounded-sm focus:outline-none text-slate-700'
                      onChange={(e) => setModel(e.target.value)}
                      value={model}
                    />
                  </div>
                  <label htmlFor='year' className='font-bold text-slate-600'>
                    Ano de fabricação
                  </label>
                  <div>
                    <input
                      type='number'
                      className='px-2 py-1.5 my-2 border-2 min-w-full border-slate-300 rounded-sm focus:outline-none text-slate-700'
                      onChange={(e) => setYear(e.target.value)}
                      value={year}
                    />
                  </div>
                  <label htmlFor='brand' className='font-bold text-slate-600'>
                    Brand
                  </label>
                  <div>
                    <input
                      type='text'
                      className='px-2 py-1.5 my-2 border-2 min-w-full border-slate-300 rounded-sm focus:outline-none text-slate-700'
                      onChange={(e) => setBrand(e.target.value)}
                      value={brand}
                    />
                  </div>
                  <label htmlFor='vehicle' className='text-base text-slate-500 font-bold'>
                    Passengers
                  </label>
                  <select
                    id='doors'
                    onChange={(e) => setPassengers(e.target.value)}
                    value={passengers}
                    className='px-2 py-1.5 my-2 border-2 min-w-full border-slate-300 rounded-sm focus:outline-none text-slate-700'
                  >
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                  </select>
                </div>
                )}
            <div>
              <button
                className='text-center font-bold text-white min-w-full bg-blue-700  hover:bg-blue-800 rounded-md px-3 py-1.5'
                onClick={handleRegister}
              >
                REGISTER
              </button>

              {isSuccess && <p className='text-center font-bold text-green-600 mt-4'>Vehicle successfully registered</p>}
              {haveError && <p className='text-center font-bold text-red-500 mt-4'>{messageError}</p>}

            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Vehicle
