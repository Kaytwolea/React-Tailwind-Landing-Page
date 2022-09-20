import react from 'react'

function Footer () {
    return (
        <div className='container h-auto mb-8 md:mt-32 mt-8 mx-auto'>
            <div className="flex flex-col md:flex-row justify-between bg-white">
            <div className="">
                <ul className="text-black flex flex-col md:flex-row gap-4 text-center md:text-left text-base font-semibold">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About Us</a>
                    </li>
                    <li>
                        <a href="/">How it Works</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="md:mt-0 mt-8">
                 <h1 className="text-2xl font-bold text-center text-black">Besnik</h1>
            </div>
            <div className="flex md:mt-0 mt-8 text-center md:text-left gap-8 flex-col md:flex-row text-black text-base font-semibold">
                <h2>Sign Up</h2>
                <h2>LogIn</h2>
            </div>
            <div className="flex gap-6 mx-auto md:mx-0 md:mt-0 mt-8">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
            </div>
        </div>
        <div className="flex justify-between flex-col mt-12 md:flex-row gap-4">
            <div>
                <h1 className="text-gray-600 text-base font-semibold text-center md:text-left">Copyright © 2022.Kaytwolea creative</h1>
            </div>
            <div>
                <h1 className="text-gray-400 text-base text-center md:text-left hidden lg:block font-semibold">_______________________________________________________________________________</h1>
            </div>
            <div>
                <h1 className="text-gray-600 text-base text-center md:text-left font-semibold">Desined by Kaytwolea</h1>
            </div>
        </div>
        </div>
        
    );
}

export default Footer;