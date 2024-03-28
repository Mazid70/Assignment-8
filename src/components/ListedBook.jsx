import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getListedBook, getWishListBook } from "./utility/LocalStorage";
import ReadBooks from "./ReadBooks";

const ListedBook = () => {
  const [getwishlist, setwishlist] = useState([]);
  const [newbook, setNewBook] = useState([]);
  const addedBook = useLoaderData();
  const [sortBy, setSortBy] = useState("Sort By");
  const [sortedBooks, setSortedBooks] = useState([]);
  const [sortedWishlistBooks, setSortedWishlistBooks] = useState([]);
  const [activeTab, setActiveTab] = useState("Listed Books");

  useEffect(() => {
    const readBooks = getListedBook();
    const wishlist = getWishListBook();
    if (addedBook.length) {
      const findBook = addedBook.filter((bk) => readBooks.includes(bk.bookId));
      const findWishListBook = addedBook.filter((bk) =>
        wishlist.includes(bk.bookId)
      );
      setNewBook(findBook);
      setwishlist(findWishListBook);
    }
  }, [addedBook]);

  useEffect(() => {
    let sorted;
    if (sortBy === "Rating") {
      sorted = [...newbook].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "Number of Pages") {
      sorted = [...newbook].sort((a, b) => a.totalPages - b.totalPages);
    } else if (sortBy === "Publisher Year") {
      sorted = [...newbook].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
    } else {
      sorted = [...newbook];
    }
    setSortedBooks(sorted);

    if (sortBy === "Rating") {
      sorted = [...getwishlist].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "Number of Pages") {
      sorted = [...getwishlist].sort((a, b) => a.totalPages - b.totalPages);
    } else if (sortBy === "Publisher Year") {
      sorted = [...getwishlist].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
    } else {
      sorted = [...getwishlist];
    }
    setSortedWishlistBooks(sorted);
  }, [sortBy, newbook, getwishlist]);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="bg-[#1313130D] p-7 rounded-xl my-5">
        {" "}
        <h1 className="text-center text-3xl font-bold">Books</h1>{" "}
      </div>
      <div className="flex justify-center">
        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-[#23BE0A] text-white py-3 px-7 font-medium text-lg rounded-lg"
        >
          <option value="Sort By" className="bg-gray-200 text-black">
            Sort By
          </option>
          <option value="Rating" className="bg-gray-200 text-black">
            Rating
          </option>
          <option value="Number of Pages" className="bg-gray-200 text-black">
            Number of pages
          </option>
          <option value="Publisher Year" className="bg-gray-200 text-black">
            Publisher year
          </option>
        </select>
      </div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Listed Books"
          checked={activeTab === "Listed Books"}
          onChange={() => handleTabChange("Listed Books")}
        />
        <div
          role="tabpanel"
          className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${
            activeTab === "Listed Books" ? "" : "hidden"
          }`}
        >
          {sortedBooks.map((book) => (
            <ReadBooks key={book.bookId} book={book}></ReadBooks>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist Books"
          checked={activeTab === "Wishlist Books"}
          onChange={() => handleTabChange("Wishlist Books")}
        />
        <div
          role="tabpanel"
          className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${
            activeTab === "Wishlist Books" ? "" : "hidden"
          }`}
        >
          {sortedWishlistBooks.map((book) => (
            <ReadBooks key={book.bookId} book={book}></ReadBooks>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListedBook;
