import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getListedBook } from "./utility/LocalStorage";
import ReadBooks from "./ReadBooks";

const ListedBook = () => {
  const [newbook,setNewBook]=useState([])
  const addedBook=useLoaderData();
  useEffect(()=>{
    const readBooks=getListedBook();
    if(addedBook.length){
      const findBook =addedBook.filter(bk=>readBooks.includes(bk.bookId))
      setNewBook(findBook)
    }
      
  },[addedBook])
  
  console.log(newbook)
  
  
  return (
    <>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Listed Books"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
         {
          newbook.map(
            book=>(<ReadBooks key={book.bookId} book={book}></ReadBooks>)
          )
         }
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist Books"
          
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Tab content 2
        </div>

       
      </div>
    </>
  );
};

export default ListedBook;
