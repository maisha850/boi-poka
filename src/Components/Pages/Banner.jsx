import React from 'react';
import book from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='md:flex  justify-between items-center p-5 bg-slate-100 rounded-xl'>
           <div>
            <h3 className='font-bold text-5xl'>Books to freshen up <br /> your bookshelf</h3>
            <button className='btn btn-success mt-12'>View the list</button>
            </div> 
            <img src={book} alt="" />
        </div>
    );
};

export default Banner;