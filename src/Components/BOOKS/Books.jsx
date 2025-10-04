import React from 'react';
import Book from './Book';

const Books = ({data}) => {
    
    return (
        <div>
            <h3 className='font-semibold text-3xl p-6 mt-9 text-center'>Books</h3>
       <div className='grid grid-cols-3 gap-8'>
          {
data.map(book=> <Book key={book.id} book={book}></Book>)
         }
       </div>
        </div>
    );
};

export default Books;