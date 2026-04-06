import React, { useContext, useState } from 'react';
import { BookContext } from '../../BooksContext/BkCxt';
import WishList from './WishList';
import ReadList from './readlist';

const Books = () => {
  const { storedBooks, wishList } = useContext(BookContext);
  const [activeTab, setActiveTab] = useState('readlist');
  const [sortingType, setsortingType] = useState("");

  return (
    <div className='container mx-auto my-8 space-y-6'>
      <div className="dropdown dropdown-start">                      {/* ✅ className */}
        <div tabIndex="0" role="button" className="btn m-1">Click ⬇️</div>
        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li onClick={() => setsortingType("pages")}><a>PAGES</a></li>
          <li onClick={() => setsortingType("rating")}><a>RATING</a></li>
        </ul>
      </div>

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

      {activeTab === 'readlist' && <ReadList sortingType={sortingType} />}
      {activeTab === 'wishlist' && <WishList wishList={wishList} sortingType={sortingType} />}  

    </div>
  );
};

export default Books;