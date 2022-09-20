import react from 'react';
import Eclipse from '../images/eclipse.png';

function Flex (props) {
    return (
        <div>
             <div className="h-56 w-72 bg-transparent mt-28">
                <h2 className="text-2xl text-black font-bold text-left">{props.title}</h2>
                <p className="text-xl font-normal mt-6 text-gray-500 text-left">{props.p}</p>
            </div>
        </div>
    );
}

function Services () {
    return(
        <div className="overflow-hidden container mx-auto h-auto md:bg-white bg-blue-100">
            <div className="mt-8">
                <img src={ Eclipse } className="mx-auto"/>
            </div>
            <div className="servicebg md:-mt-[36px] mt-0 grid grid-col-span-2 md:grid-cols-2 md:pl-56 justify-evenly h-auto w-full bg-white mx-auto">
                <Flex title="We Building Social Uniqueness" p="The marketting strategies lays out targets markets and the value"/>
                <Flex title="Social Media Beyond Probability" p="Essentially a formular for how a business is goin to complete"/>
            </div>



        </div>
    );

}

export default Services;