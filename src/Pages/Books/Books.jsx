import React, { useContext, useState } from 'react';
import { BookContext } from '../../BooksContext/BkCxt';

import WishList from './WishList';
import ReadList from './readlist';

const Books = () => {
  const { storedBooks, wishList } = useContext(BookContext);
  const [activeTab, setActiveTab] = useState('readlist');

  return (
    <div className='container mx-auto my-8 space-y-6'>

     
      <div className='flex gap-4 justify-center'>
        <button
          onClick={() => setActiveTab('readlist')}
          className={`btn ${activeTab === 'readlist' ? 'btn-primary' : 'btn-outline'}`}
        >
          📚 Read List ({storedBooks.length})
        </button>
        <button
          onClick={() => setActiveTab('wishlist')}
          className={`btn ${activeTab === 'wishlist' ? 'btn-primary' : 'btn-outline'}`}
        >
          🔖 Wish List ({wishList.length})
        </button>
      </div>

    
      {activeTab === 'readlist' && <ReadList storedBooks={storedBooks} />}
      {activeTab === 'wishlist' && <WishList wishList={wishList} />}

    </div>
  );
};

export default Books;