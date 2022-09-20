import react from 'react';
import Featureimg from '../images/feature.png';
import ListImg from '../images/icon.png';

function List (props) {
    return (
        <div className="flex h-auto w-72 md:ml-0 ml-4 gap-8 bg-white">
            <div>
            <img src={ListImg} alt=" " className="h-8 w-12" />
            </div>
            <div>
                <h1 className="text-xl text-black font-semibold text-left">{props.title}</h1>
                <p className="text-base text-gray-500 mt-4 text-left">{props.pa}</p>
            </div>
        </div>
    );
}

function Feature () {
    return (
        <div className='overflow-hidden container mx-auto h-auto gap-10 grid md:grid-cols-2 grid-col-span-2'>
            <div>
                <img src={ Featureimg } className="w-full md:mx-0 mx-auto md:mt-0 mt-8 h-[550px]"/>
            </div>
            <div className='bg-white h-auto'>
                <h2 className="text-6xl text-black font-semibold featuretxt text-center md:text-left">Handoff your work smarter now</h2>
                <p className="text-base text-gray-500 mt-4 font-normal text-center md:text-left">Create documentation for the collaborators (i.e. <br/> designers or devs) directly in your design file.</p>
                <div className="bg-transparent mt-6 grid gap-4  grid-col-span-2 ">
                    <List title="Strategic" pa="Suggests that the component spacing between cards and elements."/>
                    <List title="Work Schedule" pa="Swork schedule is the time an employee is expected to be on the job"/>
                </div>
            </div>
            
        </div>
    );
}

export default Feature;