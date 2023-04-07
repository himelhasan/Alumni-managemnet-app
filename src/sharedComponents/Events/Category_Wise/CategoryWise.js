import React, { useEffect, useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CategoryWise = () => {
    const [categories, setCategories] = useState([]);

    const [next, setNext] = useState(3);
    const [previous, setPrevious] = useState(0);

    const previousHandler = () => {
        if (previous > 0) {
            setNext(next - 3);
            setPrevious(previous - 3);
        }
    }
    const nextHandler = () => {
        setNext(next + 3);
        setPrevious(previous + 3);
    }
    useEffect(() => {
        fetch("https://rowopyusay-server.vercel.app/events")
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, [])
    let content;
    if (!categories) {
        content = <div><h1 className='text-xl text-primary'>Loading...</h1></div>
    }
    else {
        content = categories?.slice(previous, next).map((item) => (
            <div
                key={item._id}
                className='md:flex gap-3 justify-between items-center'>
                {/* image */}
                <div className='rounded-tl-xl rounded-br-xl w-full md:w-1/2 lg:w-3/12'>
                    <img className='rounded-tl-xl rounded-br-xl w-full h-[100%] object-cover' src={item.image} alt="Category" />
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
                        <h1 className="text-xl font-semibold">{item.name}</h1>
                    </div>
                    <p className="mt-3">
                        {item.description}
                    </p>
                    {/* <button className="bg-primary p-2 rounded-tl-lg rounded-br-lg w-[130px]"> */}
                    <Link
                        to={`/events/${item._id}`} className="text-white font-bold">
                        <button className="bg-primary p-2 rounded-tl-lg rounded-br-lg w-[130px]">
                            Details
                        </button>
                    </Link>
                    {/* </button> */}
                </div>
            </div>
        ))
    }
    return (
        <div>
            {content}
            {/* Pagination button */}
            <div
                className="right-0 text-white mb-5 text-right mt-5 flex gap-4 justify-end items-center mr-3">
                <button
                    onClick={() => previousHandler()}
                    disabled={previous <= 0}
                    className="text-right bg-primary">
                    <span>
                        <MdNavigateNext className="inline-block rotate-180 font-semibold text-xl" color="white" />
                    </span>
                </button>
                <button
                    onClick={() => nextHandler()}
                    disabled={next > categories.length}
                    className="text-right bg-primary">
                    <span>
                        <MdNavigateNext className="inline-block font-semibold text-xl" color="white" />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default CategoryWise;