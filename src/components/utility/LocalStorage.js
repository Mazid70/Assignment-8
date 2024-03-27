const getListedBook = () => {
  const selectedBook = localStorage.getItem("books");
  if (selectedBook) {
    return JSON.parse(selectedBook);
  } else return [];
};

const setListedBook = (id, checkforToast) => {
  const selectedBook = getListedBook();
  const exists = selectedBook.find((book) => book === id);
  if (!exists) {
    checkforToast("Book Added to ReadList");
    selectedBook.push(id);
    localStorage.setItem("books", JSON.stringify(selectedBook));
  } else {
    checkforToast("Already Exist");
  }
};
// for wishlist

const getWishListBook = () => {
  const selectedBook = localStorage.getItem("wishlist");
  if (selectedBook) {
    return JSON.parse(selectedBook);
  } else return [];
};

const setWishListBook = (id, checkforToast) => {
  const selectedBook = getListedBook();
  const selectedBooktwo = getWishListBook();
  const exists = selectedBook.find((book) => book === id);
  const existsTwo = selectedBooktwo.find((book) => book === id);
  if (!exists && !existsTwo) {
    checkforToast("Book Added to WishList");
    selectedBooktwo.push(id);
    localStorage.setItem("wishlist", JSON.stringify(selectedBooktwo));
  } else if (existsTwo) {
    checkforToast("Alrady Exist");
  } else {
    checkforToast("You have Already Read this Book");
  }
};

export { setListedBook, getListedBook, getWishListBook, setWishListBook };
