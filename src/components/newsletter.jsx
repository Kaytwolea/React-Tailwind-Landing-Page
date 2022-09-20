import react from 'react';
import Play from '../images/play.png';
import Rectanle from '../images/rectangle.png';
import Atm from '../images/atm.png';



function Newsletter () {
    return (
        <div className="container overflow-hidden mt-8 mx-auto h-auto bg-[#41B3F4] flex flex-col md:flex-row justify-between">
            <div className="md:mt-28 mt-6 md:ml-20 ml-0">
                <h1 className="text-xl text-black font-semibold md:text-left text-center">Subscribe <br/> to get updated <br/> news</h1>
                <img src={Play} alt=" " className="mt-6 mx-auto" />
            </div>
            <div className="mt-28 hidden md:block">
                <img src={Rectanle} alt=" " />
            </div>
            <div className="md:mt-28 mt-8">
                <h1 className="text-6xl text-black font-bold text-center md:text-left">Subscribe Our <br/> Newsletter</h1>
                <button className="bg-orange-600 text-white ml-36 md:ml-0 font-semibold h-16 w-28 mt-10">Subscribe</button>
            </div>
            <div className="">
                <img src={Atm} alt=" "  className="h-96 w-96"/>
            </div>
        </div>
    );
}

export default Newsletter;