import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CategoryWise from './CategoryWise';

const SingleEvent = () => {
    const event = useLoaderData();
    const { description, image, name } = event;
    console.log(event);
    return (
        <div className='max-w-5xl mx-auto md:flex justify-between gap-7 mt-4'>
            <div className='w-full mx-auto'>
                <div className='rounded-tl-xl rounded-br-xl '>
                    <img className='rounded-tl-xl rounded-br-xl' src={image} alt="Event" />
                </div>
                {/* content */}
                <div className='flex flex-col justify-between p-2'>
                    <div className="flex gap-4 items-center">
                        <div>
                            <span className="text-sm text-center">Days</span>
                            <div className="w-8 h-8 text-white bg-primary text-center rounded-full flex justify-center items-center text-lg font-semibold"> <span>3</span> </div>
                        </div>
                        <div>
                            <span className="text-sm text-center">Hours</span>
                            <div className="w-8 h-8 text-white bg-primary text-center rounded-full flex justify-center items-center text-lg font-semibold"> <span>23</span></div>
                        </div>
                        <div>
                            <span className="text-sm text-center">Min</span>
                            <div className="w-8 h-8 text-white bg-primary text-center rounded-full flex justify-center items-center text-lg font-semibold"> <span>30</span></div>
                        </div>
                        <div>
                            <span className="text-sm text-center">Sec</span>
                            <div className="w-8 h-8 text-white bg-primary text-center rounded-full flex justify-center items-center text-lg font-semibold"> <span>59</span></div>
                        </div>
                        <span className="mt-6">Remaining</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold">{name}</h1>
                    </div>
                    <p className="mt-3">
                        {description}
                    </p>
                    {/* <button className="bg-primary p-2 rounded-tl-lg rounded-br-lg w-[130px]"> */}
                    <Link
                        to="/">
                        <button className="bg-primary p-2 rounded-tl-lg rounded-br-lg w-[130px] text-white">
                            Join Event
                        </button>
                    </Link>
                    {/* </button> */}
                </div>
            </div>
            <div className=''>
                <h1 className='text-2xl font-semibold'><span className='text-primary'>Explore</span> More Events</h1>
                <CategoryWise />
            </div>
        </div>
    );
};

export default SingleEvent;