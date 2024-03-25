import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const {
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
    <Link to='/book/id'>
    <div className="rounded-xl border p-7 space-y-4">
      <div className="w-[410px] h-[300px] bg-[#F3F3F3] flex justify-center items-center mx-auto rounded-xl">
        <img className="w-[140px] h-[190px]" src={image} alt="" />
      </div>
      <div className="">
        {tags.map((tag, idx) => (
          <button
            className="bg-[#23BE0A0D] font-medium text-green-500 mr-5 mt-5 px-3 py-2 rounded-2xl"
            key={idx}
          >
            {tag}
          </button>
        ))}
      </div>
      <h1 className="font-bold text-2xl ">{bookName}</h1>
      <h5 className="text-base font-medium">By:{author}</h5>
      <hr className="border-dashed"/>
      <div className="w-full flex justify-between">
        <h2 className=" font-medium text-base">{category}</h2>
        <h2 className=" font-medium text-base flex items-center gap-2" >{rating}<CiStar  className="text-lg"/></h2>
      </div>
    </div>
    </Link>
  );
};

export default Book;
