import React from 'react'

export default function Header() {
  return (
  
    <header className='flex justify-between items-center gap-4 p-4'>
    <a href='/'><h1 className='font-medium'>free<span className='text-blue-400 bold'>Scribe</span></h1></a>
    <a href='/' className='flex items-center gap-2 specialBtn px-3 p-2 rounded-lg text-blue-400 text-sm'>
      <h1>New</h1>
      <i className="fa-solid fa-plus"></i>
    </a >

  </header>
  )
}
