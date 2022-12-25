import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <>
        <div className='header'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <a href="/">
                            <img src="/images/logo.png" height="100" className='logo' />
                        </a>    
                    </div>
                </div>
            </div>
        </div>
        <div className='menu'>
            <div className='container'>
                <ul>
                    <li>
                        <Link to='/'>Home </Link>
                    </li>
                    <li>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/product'>Product</Link>
                    </li>
                    <li>
                        <Link to='/inquiry'>Inquiry</Link>
                    </li>
                    <li>
                        <Link to='/contactus'>Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}
