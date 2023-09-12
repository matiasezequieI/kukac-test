'use client'
import Card from './components/card/card'
import data from './utils/data'

export default function Home () {
  return (
    <div className='h-screen min-h-screen flex flex-col justify-center items-center'>
      <div className='h-4/6 w-4/5 bg-slate-100 rounded-md  shadow-md'>
        <h1 className='text-4xl text-center mt-6 font-bold text-slate-600'>
          Welcome to my KUKAC challenge project
        </h1>
        <h2 className='text-2xl text-center font-bold text-slate-500'>Here you can check the challenges that were developed</h2>
        <div className='flex justify-evenly py-10'>
          {data.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              path={item.path}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
