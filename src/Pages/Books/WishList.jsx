import React from 'react';

const WishList = ({ wishList }) => {
  return (
    <div>
      {wishList.length === 0 ? (
        <p className='text-center text-gray-500'>No books in your wishlist yet.</p>
      ) : (
        <div className='flex flex-col gap-5 items-center'>
          {wishList.map((book) => (
            <div key={book.bookId} className='card bg-base-100 shadow-md p-4 flex flex-row gap-4 w-3/4 mx-auto'>
              <img src={book.image} alt={book.bookName} className='h-[120px] w-[80px] object-cover rounded-lg' />
              <div className='space-y-1'>
                <h3 className='font-bold text-lg'>{book.bookName}</h3>
                <p className='text-sm text-gray-500'>By {book.author}</p>
                <p className='text-sm'>{book.category}</p>
                <div className='flex gap-1 flex-wrap'>
                  {book.tags.map((tag, ind) => (
                    <span key={ind} className='badge badge-info text-xs'>{tag}</span>
                  ))}
                </div>
                <p className='text-sm font-semibold'>⭐ {book.rating}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;