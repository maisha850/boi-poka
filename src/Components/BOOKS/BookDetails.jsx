import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addData } from '../Utilty/Utility';
import { addWishData } from '../Utilty/Wishlist';

const BookDetails = () => {
    const {id}=useParams()

    const data=useLoaderData()
    const singleBook=data.find(book=>book.bookId===Number(id))
    
    
    const{ bookName,author,image,category,review,bookId}=singleBook
    const handleMarkRead=(id)=>{
      addData(id)
    }
    
    const handleWishList=(id)=>{
      addWishData(id)
    }
    
    return (
        <div className='md:flex justify-between items-center md:p-0 p-5'>
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
     
     <button onClick={()=>handleMarkRead(bookId)} className='btn btn-accent'>Mark as Read</button>
     <button onClick={()=>handleWishList(bookId)} className='btn btn-info'>Add to Wishlist</button>
    </div>
        </div>
      </div>
  </div>
            
        </div>
    );
};

export default BookDetails;