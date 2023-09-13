import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CardProps = {
  image: string,
  path: string,
  title: string,
  description: string,
}

const Card = ({ image, path, title, description }: CardProps) => {
  return (
    <div className='max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <Image
        className='rounded-t-lg object-fill h-48 w-96'
        priority
        src={image}
        alt='project card'
        width={150}
        height={150}
      />
      <div className='p-5'>
        <a href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {title}
          </h5>
        </a>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {description}
        </p>
        <Link
          href={path}
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          CHECK IT OUT
        </Link>
      </div>
    </div>
  )
}

export default Card
