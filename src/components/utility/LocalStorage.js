const getListedBook = () => {
  const selectedBook = localStorage.getItem("books");
  if (selectedBook) {
    return JSON.parse(selectedBook);
  } else return [];
};
const setWishListBook = (id) => {
    const selectedBook = getWishListBook();
    const exists = selectedBook.find((book) => book === id);
    if (!exists) {
      selectedBook.push(id);
      localStorage.setItem("wishlist", JSON.stringify(selectedBook));
    }
  };
const getWishListBook = () => {
  const selectedBook = localStorage.getItem("wishlist");
  if (selectedBook) {
    return JSON.parse(selectedBook);
  } else return [];
};
const setListedBook = (id) => {
const get=getListedBook()
  const selectedBook = getListedBook();
  const exists = selectedBook.find((book) => book === id);
  const existsTwo = selectedBook.find((book) => book === id);
  if (!existsTwo) {
    selectedBook.push(id);
    localStorage.setItem("books", JSON.stringify(selectedBook));
  }
};

export { setListedBook, getListedBook, getWishListBook, setWishListBook };
