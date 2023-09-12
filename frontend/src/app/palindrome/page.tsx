const Palyndrome = () => {
  return (
    <div className='h-screen min-h-screen flex flex-col justify-center items-center'>
      <div className='h-4/5 w-1/4 bg-slate-100 rounded-md shadow-md flex flex-col items-center'>
        <div>
          <h1 className='text-4xl text-center mt-6 font-bold text-slate-600'>
            Palindrome
          </h1>
          <p className='text-2xl text-center font-bold text-slate-500'>
            A palindromic number is a number that remains the same when its digits are reversed.
          </p>
        </div>
        <div className='mt-20'>
          <div>
            <label htmlFor='start' className='font-bold text-slate-600'>
              First number
            </label>
            <div>
              <input type='number' className='my-2 border-2 border-slate-300 rounded-sm focus:outline-none' />
            </div>
          </div>
          <div>
            <label htmlFor='end' className='font-bold text-slate-600'>
              Last number
            </label>
            <div>
              <input type='number' className='my-2 border-2 border-slate-300 rounded-sm focus:outline-none' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Palyndrome
