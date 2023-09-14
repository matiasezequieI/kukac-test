import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-slate-100 flex justify-center font-bold text-slate-600'>
      <Link href='/' className='text-2xl'>Home</Link>
    </div>
  )
}

export default Header
