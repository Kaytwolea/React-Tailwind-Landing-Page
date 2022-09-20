import Logo from '../images/logo.png';
import { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icon/ai';



function Navbar () {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [isOpen, setIsOpen] = useState(false);
    
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="h-20 overflow-hidden flex justify-between items-center headerbg">
            <div>
                <img src={ Logo } className="h-12 w-32 ml-10 md:ml-24"></img>
            </div>
            <div>
                <div>
                    <ul className="text-black hidden md:flex text-base font-normal gap-4">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About Us</a>
                        </li>
                        <li>
                            <a href="/">How it works</a>
                        </li>
                        <li>
                            <a href="/">Contact</a>
                        </li>
                    </ul>
                </div>
               
            </div>
            <button className="h-12 w-36 rounded-full  navbutton hidden shadow-xl shadow-gray-200 md:block mr-20 font-semibold text-xl">Get Started</button>
            <div className="block lg:hidden pr-2">
                    <button className="text-black h-10 w-16" onClick={handleNav}>
                      <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                      </svg>
                    </button>
            </div>
            <ul className={nav ? 'fixed left-8 top-12 w-4/6 h-auto border-r border-r-gray-900 bg-[#d4e7fe] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <li className='p-4 border-b border-gray-600 text-xl text-black'>Home</li>
                <li className='p-4 border-b border-gray-600 text-xl text-black'>About</li>
                <li className='p-4 border-b border-gray-600 text-xl text-black'>How it Works</li>
                <li className='p-4 text-black text-xl'>Contact</li>
            </ul> 
        </div>
        
    );

}

export default Navbar;