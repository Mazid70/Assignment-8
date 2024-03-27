import PropTypes from "prop-types";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";
const ReadBooks = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="flex mt-5 rounded-xl border gap-6 p-6">
      <div className="h-[230px] w-[230px] bg-[#1313130D] flex justify-center items-center">
        <img src={image} alt="" className="h-[175px] w-[130px]" />
      </div>
      <div className="space-y-4">
        <h1 className="font-bold text-2xl ">{bookName}</h1>
        <h5 className="text-base font-medium">By:{author}</h5>
        <div className="flex items-center mb-5">
          <span className="font-bold text-black mr-5">Tag</span>
          {tags.map((tag, idx) => (
            <button
              className="bg-[#23BE0A0D] font-semibold text-green-500 mr-5 px-3 py-2 rounded-2xl"
              key={idx}
            >
              #{tag}
            </button>
          ))}
          <h1 className="flex gap-2 items-center text-base font-normal text-[#131313B3]">
            <MdOutlineLocationOn className="text-xl" /> Year of Publishing:
            {yearOfPublishing}
          </h1>
        </div>
        <div className="flex">
          <h1 className="flex gap-2 items-center font-semibold text-[#131313B3]  mr-5">
            <IoPeopleOutline className="text-2xl" /> Publisher: {publisher}
          </h1>
          <h1 className="flex gap-2 items-center  font-semibold text-[#131313B3] mr-5">
            <MdOutlineContactPage className="text-2xl" /> Page {totalPages}
          </h1>
        </div>

        <hr className="border-1.5 w-[1150px]" />
        <button className="bg-[#328EFF26] text-[#328EFF] py-2 px-4 rounded-full mr-3">
          {" "}
          Category: {category}
        </button>
        <button className="bg-[#FFAC3326] text-[#FFAC33] py-2 px-4 rounded-full mr-3">
          {" "}
          Rating: {rating}
        </button>
        <Link to={`/book/${bookId}`}>
        <button className="bg-[#23BE0A] text-white py-2 px-4 rounded-full">
          {" "}
          View Details
        </button>
        </Link>
       
      </div>
    </div>
  );
};
ReadBooks.propTypes = {
  book: PropTypes.object,
};
export default ReadBooks;
