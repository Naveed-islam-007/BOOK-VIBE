import React from 'react';
import { Link } from 'react-router';

const Book = ({ bk }) => {
    return (
        <Link to={`/bookdetails/${bk.bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className='p-8'>
                    <img
                        src={bk.image}
                        alt={bk.bookName}
                        className='h-[250px] rounded-xl'
                    />
                </figure>
                <div className="card-body">
                    <div className='flex items-center gap-2'>
                        {bk.tags.map(tag => (
                            <div key={tag} className="badge badge-success">{tag}</div>
                        ))}
                    </div>
                    <h2 className="card-title font-bold">
                        {bk.bookName}
                    </h2>
                    <p className='text-xl font-medium'>BY {bk.author}</p>
                    <div className="card-actions justify-between">
                        <div className='text-xl font-semibold'>{bk.category}</div>
                        <div className="badge badge-outline font-bold">{bk.rating}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;