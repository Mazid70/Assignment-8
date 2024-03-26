import { useLoaderData, useParams } from "react-router-dom";
import { getListedBook, setListedBook, setWishListBook } from "./utility/LocalStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

const BookDetails = () => {
  const [readBook, setReadBook] = useState([]);
  const books = useLoaderData();
  const { bookId } = useParams();
  const book = books.find((book) => book.bookId == bookId);
  useEffect(() => {
    const getBook = getListedBook();
    setReadBook(getBook);
    
  }, []);

  const addReadBoook = () => {
    checkforToast();
    setListedBook(numberbookid);
  };
  const addWishListBook=()=>{
    setWishListBook(numberbookid)
  }
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  const numberbookid = parseInt(bookId);
  const exists = readBook.find((item) =>  console.log(item));

  const checkforToast = () => {
    if (!exists) {
      toast("Book Added to Read List");
    } else {
      toast("Alrady added");
    }
  };

  return (
    <div key={bookId} className="flex gap-12 mt-10">
      <ToastContainer />
      <div className="w-[570px] h-[710px] bg-[#1313130D] flex justify-center items-center rounded-xl">
        <img src={image} alt="" className="w-[70%] h-[70%]" />
      </div>
      <div className="space-y-5 flex-1">
        <h1 className="text-4xl font-bold my-10">{bookName}</h1>
        <h1 className="font-bold text-xl ">{author}</h1>
        <hr />
        <h1 className="font-bold text-xl ">{category}</h1>
        <h1 className="text-base text-[#131313B3]">
          {" "}
          <span className="font-bold text-black">Review : </span>
          {review}
        </h1>
        <div className="">
          <span className="font-bold text-black mr-5">Tag</span>
          {tags.map((tag, idx) => (
            <button
              className="bg-[#23BE0A0D] font-medium text-green-500 mr-5 mt-5 px-3 py-2 rounded-2xl"
              key={idx}
            >
              #{tag}
            </button>
          ))}
        </div>
        <hr />
        <div className="flex gap-16">
          <div className="space-y-4">
            <h1 className=" text-base font-normal text-[#131313B3]">
              Number of Pages:
            </h1>
            <h1 className=" text-base font-normal text-[#131313B3]">
              Publisher:
            </h1>
            <h1 className=" text-base font-normal text-[#131313B3]">
              Year of Publishing:
            </h1>
            <h1 className=" text-base font-normal text-[#131313B3]">Rating:</h1>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-black">{totalPages} </h4>
            <h4 className="font-bold text-black">{publisher} </h4>
            <h4 className="font-bold text-black">{yearOfPublishing} </h4>
            <h4 className="font-bold text-black">{rating} </h4>
          </div>
        </div>{" "}
        <button onClick={addReadBoook} className="btn btn-outline mr-4">
          Read
        </button>
        <button onClick={addWishListBook}
         className="btn btn-accent">Wishlist</button>
      </div>
    </div>
  );
};

export default BookDetails;
