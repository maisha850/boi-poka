import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id}=useParams()

    const data=useLoaderData()
    const singleBook=data.find(book=>book.bookId===Number(id))
    
    
    const{ bookName,author,image,category,review}=singleBook
    return (
        <div className='flex justify-between items-center'>
           <figure className=' bg-slate-100 w-[500px] py-8 rounded-xl'>
    <img className='w-100 mx-auto'
      src={image} 
      alt="Shoes" />
  </figure>
  <div>
    <div className="w-[550px]">
       <h2 className='text-2xl font-bold'>{bookName} </h2>
        <h3 className='text-[#131313] font-medium'>By:{author}</h3>
        <div className="divider"></div>
          <p className='text-xl'>{category}</p>
          <div className="divider"></div>
        <p>{review}</p>
    
        
        <div className=" justify-end">
    <div className='flex gap-3 text-gray-700 font-medium mt-5'>
     
     <button className='btn btn-accent'>Read</button>
     <button className='btn btn-info'>Wishlist</button>
    </div>
        </div>
      </div>
  </div>
            
        </div>
    );
};

export default BookDetails;