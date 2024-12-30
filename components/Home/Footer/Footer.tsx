import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'

const Footer = () => {
     return (
          <div className='pt-20 pb-12 bg-black'>
               <div className="mx-auto w-[80%] grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20">
                    {/* First Part */}
                    <div>

                         <div className="flex items-center space-x-3">
                              <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col">
                                   <FaHouse />
                              </div>
                              <h1 className='text-white font-bold text-sm sm:text-base md:text-xl'>HomeHub</h1>
                         </div>
                         <p className='text-gray-300 mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, explicabo.</p>
                         <p className='text-gray-300 mt-4 font-semibold'>ahmed.eltarouty@gmail.com</p>
                         <p className='text-gray-300 mt-2 font-semibold'>+20 100 425 3046</p>
                         <p className='text-gray-300 mt-2 font-semibold'>+971 56 558 2017</p>
                         {/* Social Links */}
                         <div className='flex items-center space-x-4 mt-6'>
                              <FaFacebookF className='w-6 h-6 text-blue-600' />
                              <FaTwitter className='w-6 h-6 text-sky-500' />
                              <FaYoutube className='w-6 h-6 text-red-700' />
                              <FaInstagram className='w-6 h-6 text-pink-600' />
                         </div>
                    </div>
                    {/* Second Part */}
                    <div className='md:mx-auto'>
                         <h1 className='footer__heading'>Popular Search</h1>
                         <p className='footer__link'>Appartment For Rent</p>
                         <p className='footer__link'>Apaartment Low to Hight</p>
                         <p className='footer__link'>Offices For Buy</p>
                         <p className='footer__link'>Offices For Rent</p>
                    </div>
                    {/* Third Part */}
                    <div className='lg:mx-auto'>
                         <h1 className='footer__heading'>Quick Link</h1>
                         <p className='footer__link'>Terms of use</p>
                         <p className='footer__link'>Privacy Policy</p>
                         <p className='footer__link'>Pricing Plans</p>
                         <p className='footer__link'>Our Services</p>
                         <p className='footer__link'>Contact Support</p>
                         <p className='footer__link'>Careers</p>
                         <p className='footer__link'>FAQs</p>
                    </div>
                    {/* Fourth Part */}
                    <div className='md:mx-auto'>
                         <h1 className='footer__heading'>Discover</h1>
                         <p className='footer__link'>Miami</p>
                         <p className='footer__link'>Los Anglese</p>
                         <p className='footer__link'>Chicago</p>
                         <p className='footer__link'>New York</p>
                         <p className='footer__link'>London</p>
                    </div>
               </div>
               <p className='text-center mt-4 text-base text-white opacity-70'>	&copy; Copyright 2025 by Ahmed Eltarouty</p>
          </div>
     )
}

export default Footer