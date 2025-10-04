import React from 'react';
import { IoStarHalfOutline } from "react-icons/io5";
import { Link } from 'react-router';

const Book = ({book}) => {
    
    const{ bookName,author,image,category,rating,tags,totalPages,bookId}=book
    return (
    <Link to={`/bookDetails/${bookId}`}>
       <div className="card bg-base-100 w-96 shadow-sm ">
  <div className='px-6'>
    <figure className=' bg-slate-100 h-[230px] py-8 rounded-xl'>
    <img className='w-[120px] '
      src={image}
      alt="Shoes" />
  </figure>
  </div>
  <div className='px-6'>
    {
        tags.map(tag=> <button className='btn btn-xs btn-soft btn-success mr-8 mt-4'> {tag} </button>)
    }
  </div>
  <div className="card-body">
    <h2 className="card-title">{bookName} <span><button className='btn btn-secondary btn-xs btn-active'>{totalPages}</button></span> </h2>
    <h3 className='text-[#131313] font-medium'>By:{author}</h3>
    <div className='border-dashed border-t-1 border-gray-400 my-2'></div>
    
    <div className="card-actions justify-end">
<div className='flex gap-3 text-gray-700 font-medium'>
   <button className='btn btn-xs btn-dash'>{category}</button>
<p className='flex items-center gap-0.5'>{rating} <span><IoStarHalfOutline></IoStarHalfOutline></span></p> 
</div>
    </div>
  </div>
</div>
</Link>
    );
};

export default Book;