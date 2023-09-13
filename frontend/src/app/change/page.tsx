'use client'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'

const Change = () => {
  type changeResult = {
      bills1: number,
      bills10: number,
      bills100: number,
      purchaseValue: string,
      moneyHandedOver: string,
      cents: number
  }

  const [purchaseValue, setPurchaseValue] = useState('')
  const [moneyHandedOver, setMoneyHandedOver] = useState('')
  const [haveError, setHaveError] = useState(false)
  const [messageError, setMessageError] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [result, setResult] = useState<changeResult | null>()

  const handleCheck = async () => {
    try {
      const res = await axios.post('http://localhost:3001/change', { purchaseValue: Number(purchaseValue), moneyHandedOver: Number(moneyHandedOver) }, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
      setHaveError(false)
      setMessageError('')
      setIsSuccess(true)
      setResult(res.data)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setIsSuccess(false)
          setResult(null)
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
            Change checker
          </h1>
          <p className='text-2xl text-center font-bold text-slate-500 mt-8 px-2'>
            Show the minimum number of notes that the cashier must provide as change
          </p>
        </div>
        <div className='mt-20'>
          <div>
            <label htmlFor='start' className='font-bold text-slate-600'>
              Purchase value
            </label>
            <div>
              <input
                type='number'
                className='px-2 py-1.5 my-2 border-2 min-w-full border-slate-300 rounded-sm focus:outline-none text-slate-700'
                onChange={(e) => setPurchaseValue(e.target.value)}
                value={purchaseValue}
              />
            </div>
          </div>
          <div>
            <label htmlFor='end' className='font-bold text-slate-600'>
              Money handed over
            </label>
            <div>
              <input
                type='number'
                className='px-2 py-1.5 my-2 border-2 min-w-full border-slate-300 rounded-sm focus:outline-none text-slate-700'
                onChange={(e) => setMoneyHandedOver(e.target.value)}
                value={moneyHandedOver}
              />
            </div>
          </div>
          <div>
            <button
              className='mt-6 mb-16 text-center font-bold text-white min-w-full bg-blue-700  hover:bg-blue-800 rounded-md px-3 py-1.5'
              onClick={handleCheck}
            >
              CHECK
            </button>
          </div>
          <div className='flex justify-around w-96 items-baseline'>
            <div>
              <Image
                className='w-auto h-auto'
                priority
                src='/bill100-image.jpg'
                alt='100 bill'
                width={70}
                height={70}
              />
              <p className='text-center'>Amount: {result ? result.bills100 : '0'}</p>
            </div>
            <div>
              <Image
                className='w-auto h-auto'
                priority
                src='/bill10-image.jpg'
                alt='10 bill'
                width={70}
                height={70}
              />
              <p className='text-center'>Amount: {result ? result.bills10 : '0'}</p>
            </div>
            <div>
              <Image
                className='w-auto h-auto'
                priority
                src='/bill1-image.jpg'
                alt='1 bill'
                width={70}
                height={70}
              />
              <p className='text-center'>Amount: {result ? result.bills1 : '0'}</p>
            </div>
            <div>
              <Image
                className='w-auto h-auto'
                priority
                src='/cents-image.png'
                alt='coin image'
                width={40}
                height={40}
              />
              <p className='text-center'>Amount: {result ? result.cents : '0'}</p>
            </div>
          </div>
        </div>
        <div>
          {haveError && <p className='font-bold text-red-500 text-center mt-4 px-2'>{messageError}</p>}
        </div>
        <div className='mt-4'>
          <p>{result && `The value o the purchase was: R$ ${result.purchaseValue}`}</p>
          <p>{result && `The amount of money handed over was: R$ ${result.moneyHandedOver}`}</p>
        </div>
      </div>
    </div>
  )
}

export default Change
