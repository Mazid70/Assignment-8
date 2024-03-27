import { Link } from "react-router-dom";
import bannerImg from "../assets/pngwing 1.png";
const Banner = () => {
  return (
    <div className="flex justify-between items-center bg-[#1313130D] p-10  lg:p-32 rounded-xl lg:mt-10">
      <div>
        <h1 className="text-3xl sm:text-3xl  lg:text-6xl font-bold">
          Books to freshen <br /> up your bookshelf
        </h1>
        <Link to='/listed'>
        <button className="btn bg-green-500 text-white font-bold lg:text-xl mt-5  lg:mt-12">
          View The List
        </button>
        </Link>
        
      </div>
      <div className="h-4/5 lg:h-auto w-4/5 lg:w-auto">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
