import react from 'react';
import Heroimg from "../images/hero.png";

function Header () {
    return (
        <div className='headerbg overflow-hidden'>
             <div className="container mx-auto h-auto grid grid-col-span-2 md:grid-cols-2">
            <div className="w-full h-full md:ml-20 ml-0 mt-14">
                <h2 className="text-7xl text-black md:text-left text-center font-semibold">Banking <br/> More Smart</h2>
                <p className="text-xl text-gray-600 font-normal text-center md:text-left">Meet the only spend management <br/> platform and corporate card</p>
                <div className="gap-4 hidden md:flex">
                    <div>
                        <button className="h-12 w-16 shadow-xl shadow-gray-300 navbutton mt-6"><i className="fa fa-arrow-right"></i></button>
                    </div>
                    <div>
                        <h1 className="text-xl text-gray-800 mt-8">Get your Card</h1>
                    </div>

                </div>
            </div>
            <div>
                <img src={ Heroimg } className="h-[450px] w-full pr-20 md:ml-0 ml-8"></img>
            </div>
        </div>
        </div>
    );
}

export default Header;