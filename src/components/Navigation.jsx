import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <div className='navbar'>
  
    <Link to ='/' className='nav'>Home</Link>
    <Link to='/about' className='nav'>About </Link>
     <Link to='/contact' className='nav'>contact us</Link>
     <Link to='/services' className='nav'>service</Link>
    <Link to='/propsdrilling' className='nav'>Props Drilling</Link>
      
    </div>
  )
}

export default Navigation

