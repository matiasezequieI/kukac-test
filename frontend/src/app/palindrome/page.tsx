'use client'

import axios from 'axios'
import { useState } from 'react'

const Palyndrome = () => {
  const [firstNumber, setFirstNumber] = useState('')
  const [lastNumber, setLastNumber] = useState('')
  const [haveError, setHaveError] = useState(false)
  const [messageError, setMessageError] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [result, setResult] = useState('')

  const handleCheck = async () => {
    try {
      const res = await axios.post('http://localhost:3001/palyndrome', { start: Number(firstNumber), end: Number(lastNumber) }, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
      setHaveError(false)
      setMessageError('')
      setIsSuccess(true)
      const filteredData = res.data.join(', ')
      setResult(filteredData)
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
    <div className='h-screen min-h-screen flex flex-col justify-center items-center'>
      <div className='h-4/5 w-1/4 bg-slate-100 rounded-md shadow-md flex flex-col items-center'>
        <div>
          <h1 className='text-4xl text-center mt-6 font-bold text-slate-600'>
            Palindrome
          </h1>
          <p className='text-2xl text-center font-bold text-slate-500 mt-8'>
            A palindromic number is a number that remains the same when its digits are reversed.
          </p>
        </div>
        <div className='mt-20'>
          <div>
            <label htmlFor='start' className='font-bold text-slate-600'>
              First number
            </label>
            <div>
              <input
                type='number'
                onChange={(e) => setFirstNumber(e.target.value)}
                value={firstNumber}
                className='px-2 py-1.5 my-2 border-2 border-slate-300 rounded-sm focus:outline-none text-slate-700'
              />
            </div>
          </div>
          <div>
            <label htmlFor='end' className='font-bold text-slate-600'>
              Last number
            </label>
            <div>
              <input
                type='number'
                onChange={(e) => setLastNumber(e.target.value)}
                value={lastNumber}
                className='px-2 py-1.5 my-2 border-2 border-slate-300 rounded-sm focus:outline-none text-slate-700'
              />
            </div>
          </div>
          <button
            className='mt-6 text-center font-bold text-white min-w-full bg-blue-700  hover:bg-blue-800 rounded-md px-3 py-1.5'
            onClick={handleCheck}
          >
            CHECK
          </button>
        </div>
        <div>
          <div>
            {haveError && <p className='font-bold text-red-500 mt-24 px-6'>{messageError}</p>}
          </div>
          <div className='mt-16 px-6'>
            {isSuccess && <p className='pt-24'>{result}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Palyndrome
