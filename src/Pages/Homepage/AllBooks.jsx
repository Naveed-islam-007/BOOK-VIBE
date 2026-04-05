import React, { use } from 'react';
import Book from './Book';

const booksPromise=fetch('/booksData.json').then((res)=>res.json());

const AllBooks = () => {
    const bks=use(booksPromise);
    console.log(bks);
    return (
        <div className='my-6 container mx-auto'> 
           
                <h2 className='font-bold text-2xl text-center'>Books</h2>
<div className=' my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
             {
                bks.map((bk)=>{
                    return (
                <Book bk={bk}></Book>

                    )
                })
               }


</div>
    
           
        </div>
    );
};

export default AllBooks;