import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { id } = useParams();
    const books = useLoaderData();
    const expBook = books.find(book => book.bookId == id);
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = expBook;

    return (
         <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-8">
      <figure className="w-full flex items-center justify-center bg-gray-100 rounded-xl">
        <img src={image} alt="Album" className="h-[400px]" />
      </figure>
      <div className="card-body space-y-3">
        <h2 className="card-title text-2xl">{bookName}</h2>
        <h2 className="card-title">By: {author}</h2>
        <p className="py-2 border-y">{category}</p>
        <p className='text-xl font-semibold'>Review: {review}</p>
        <div className="flex items-center gap-2 ">
          {tags.map((tag, ind) => (
            <div
              key={ind}
              className="badge text-green-500 bg-green-100 font-bold "
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="border-t space-y-3">
          <div className="flex justify-between items-center gap-2">
            <span>Number of pages: </span> <span>{totalPages}</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span>publisher: </span> <span>{publisher}</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span>Publish time: </span> <span>{yearOfPublishing}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="btn"
            
            >
              Mark as Read
            </button>
            <button
              className="btn btn-primary"
              
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default BookDetails;