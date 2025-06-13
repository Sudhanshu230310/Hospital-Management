import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { Link as Link2 } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaBars, FaTimes } from 'react-icons/fa';

const notify = (text) => toast(text);

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data } = useSelector((store) => store.auth);
    const dispatch = useDispatch();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // common link styles
    const baseLinkStyles = 'text-gray-700 cursor-pointer transition-all duration-300 font-medium relative group';
    const activeLinkStyles = 'text-green-600';

    return (
        <>
            <ToastContainer />
            <nav className='sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-lg transition-all duration-300'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between items-center h-16'>
                        {/* Logo */}
                        <div className='flex-shrink-0 transform transition duration-300 hover:scale-105'>
                            <h1 className='text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent'>
                                ClinIntel
                            </h1>
                        </div>

                        {/* Desktop Menu */}
                        <div className='hidden md:flex items-center space-x-8'>
                            {['home', 'about', 'services', 'faq'].map((section) => (
                                <Link
                                    key={section}
                                    to={section}
                                    spy={true}
                                    smooth={true}
                                    offset={-64}
                                    duration={500}
                                    activeClass={activeLinkStyles}
                                    className={baseLinkStyles}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1).replace(/\bUs$/, ' Us')}
                                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                            ))}
                            <Link2
                                to={'/dLogin'}
                                className='bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium'
                            >
                                Staff Login
                            </Link2>
                        </div>

                        {/* Mobile menu button */}
                        <div className='md:hidden'>
                            <button
                                onClick={toggleMenu}
                                className='text-gray-700 hover:text-green-600 transition-colors duration-300 p-2'
                            >
                                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2 flex flex-col">
                            {['home', 'about', 'services', 'faq'].map((section) => (
                            <Link
                                key={section}
                                to={section}
                                spy={true}
                                smooth={true}
                                offset={-64}
                                duration={500}
                                activeClass="text-green-600"
                                onClick={closeMenu}
                                className="block px-3 py-2 text-gray-700 rounded-md transition-all duration-300 hover:text-green-600"
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1).replace(/\bUs$/, ' Us')}
                            </Link>
                            ))}
                            <Link2
                            to="/dLogin"
                            onClick={closeMenu}
                            className="block w-full text-center bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md transition-all duration-300 mt-2"
                            >
                            Staff Login
                            </Link2>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
