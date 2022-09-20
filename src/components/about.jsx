import react from 'react';
import Cards from "../images/card.png";
import Fire from "../images/fire.png";


function Card (props) {
    return (
        <div>
            <div className="h-56 w-56 bg-white">
                <img className="pt-2 ml-6" src={Cards} alt='' />
                <h1 className="font-bold text-2xl text-black mt-8 ml-6">{props.title}</h1>
                <p className="text-base font-semibold text-gray-500 ml-6 mt-6 ">{props.p}</p>
            </div>
        </div>
    );
}

function About () {
    return (
        <div className="container overflow-hidden h-auto bg-white mt-16 grid grid-col-span-4 lg:grid-cols-4 mx-auto justify-center gap-16">
            <div className="h-56 w-64 bg-white">
            <div className="flex gap-2">
                <h2 className="font-bold text-3xl text-black mt-8 ml-6">Hot</h2>
                <img src={Fire} className="mt-2" />
            </div>
            <h2 className="font-bold text-3xl text-black ml-6">Deals For You</h2>
            <p className="text-base font-semibold text-gray-500 ml-6 mt-4">Online shopping for retail sales direct to customer</p>
            </div>
            <Card title="1.5% cashback" p="Online shopping for retail sales direct to customer"/>
            <Card title="30-day terms" p="Online shopping for retail sales direct to customer"/>
            <Card title="Save Money" p="Online shopping for retail sales direct to customer"/>
        </div>
    );
}

export default About;