import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-red-950 text-white py-8'>
        <div className='container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* About Us */}
            <div>
                <h2 className='text-lg font-semibold mb-4'>About Us</h2>
                <p className='text-white text-sm'>
                    IndoPulse is your trusted source for the latest news and insights from Indonesia. We are committed to delivering accurate and timely information to keep you informed about the events shaping our nation.
                </p>
            </div>
            {/* Quick Links */}
            <div>
                <h2 className='text-lg font-semibold mb-4'>Quick Links</h2>
                <ul className='space-y-2 text-white'>
                    <li>
                        <Link to={"/"} className='hover:text-gray-400'>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"} className='hover:text-gray-400'>About</Link>
                    </li>
                    <li>
                        <Link to={"/news"} className='hover:text-gray-400'>News Articles</Link>
                    </li>
                    <li>
                        <Link to={"/"} className='hover:text-gray-400'>Contact</Link>
                    </li>
                </ul>
            </div>
            {/* Contact Us */}
            <div>
                <h2 className='text-lg font-semibold mb-4'>Contact Us</h2>
                <p className='text-white text-sm'>Kushinagar, India</p>
                <p className='text-white text-sm'>Email: help.asgclabs@gmail.com</p>
                <p className='text-white text-sm'>Phone: +91 8090801262</p>
            </div>
        </div>

        {/* Social Media & Copyright */}
        <div className='mt-8 border-t border-red-900 pt-6 text-center text-white text-sm'>
            <p>Follow us on:</p>

            <div className='flex justify-center space-x-4 mt-3'>
                <a href="#" className='hover:text-gray-400'>Facebook</a>
                <a href="#" className='hover:text-gray-400'>Twitter</a>
                <a href="#" className='hover:text-gray-400'>Instagram</a>
                <a href="#" className='hover:text-gray-400'>LinkedIn</a>
                <a href="#" className='hover:text-gray-400'>Youtube</a>
            </div>
            <p className='mt-6'>© 2025 IndoPulse. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
