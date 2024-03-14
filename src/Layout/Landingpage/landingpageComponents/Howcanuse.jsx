import React from 'react';
import img from "../../../assets/banner/Screenshot_5.png"
import { Link } from 'react-router-dom';
import Button from '../../../Components/Button';
const Howcanuse = () => {
    return (
        <div className='flex py-20 max-w-screen-xl gap-5 mx-auto items-center justify-between'>
            <div className='w-full shadow-2xl md:w-[70%]'>
                <img src={img} alt="" />
            </div>
            <div className='space-y-5 w-[40%]'>
                <h1 className='text-4xl font-bold'>How you can use this site</h1>
                <p className='text-xl tracking-wider'>Navigating through the world of mathematics has never been easier with Math hero. Our platform is designed to support students, educators, and math enthusiasts at every level, from basic arithmetic to advanced calculus and beyond. Here's how you can leverage the full potential of our website:</p>
                <Link to="/dashoard/problem" className='inline-block'><Button title={"Explore more"}></Button></Link>
            </div>
        </div>
    );
};

export default Howcanuse;