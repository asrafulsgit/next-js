import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-10 py-3 border-b border-green-200'>
       <Link href={'/'} >Asraful</Link>
       <Link href={'/about'} >About</Link>
    </div>
  )
}

export default Navbar
