import { Link } from "react-router-dom";
import bannerImg from "../assets/pngwing 1.png";
const Banner = () => {
  return (
    <div className="flex justify-between items-center bg-[#1313130D] p-32 rounded-xl mt-10">
      <div>
        <h1 className="text-6xl font-bold">
          Books to freshen <br /> up your bookshelf
        </h1>
        <Link to='/listed'>
        <button className="btn bg-green-500 text-white font-bold text-xl mt-12">
          View The List
        </button>
        </Link>
        
      </div>
      <div>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
