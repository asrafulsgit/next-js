import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-10 py-3 border-b border-green-200'>
       <Link href='/' >Asraful</Link>
       <nav className='flex gap-3'>
          <Link href='/about' >About</Link>
          <Link href='/contact' >Contact</Link>
          <Link href='/student' >Student</Link>
          <Link href='/profile' >Profile</Link>
       </nav>
    </div>
  )
}

export default Navbar
