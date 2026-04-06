import React, { useState, createContext } from 'react';

export const BookContext = createContext()

const BkCxt = ({children}) => {

  const [storedBooks, setstoredBooks] = useState([])
  const [wishList, setWishList] = useState([])

const handleWishList = (currentBook) => {
    const existinReadList=storedBooks.find((book)=>book.bookId===currentBook.bookId)
    if(existinReadList){
        alert(`Exist in read list`)
        return;
    }
  const bookExists = wishList.find((book) => book.bookId === currentBook.bookId)
  if(bookExists){
    alert("Already in wishlist")
  } else {
    setWishList([...wishList, currentBook])
    alert(`${currentBook.bookName} added to wishlist`)
  }
}
  
  const handleClick = (currentBook) => {
    const BookExist = storedBooks.find((book) => book.bookId === currentBook.bookId)
    if(BookExist){
      alert("Already exists")
    } else {
      setstoredBooks([...storedBooks, currentBook])
      alert(`${currentBook.bookName} added to the list`)
    }
  } 

  const data = {
  storedBooks, setstoredBooks, handleClick,
  wishList, setWishList, handleWishList  
}

  return (
    <BookContext.Provider value={data}>
      {children}
    </BookContext.Provider>
  )
};

export default BkCxt;