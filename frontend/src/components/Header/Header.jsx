import imgUrl from "../../assets/images.jpeg";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import { FaRegUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <header>
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50 "></div>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10">
        <img
          src={imgUrl}
          alt="Trello logo"
          width={30}
          height={30}
          className="w-30 md:w-35 ml-1 mt-1 pb-2 md:pb-0 object-contain"
        />
        {/* search box */}
        <div className="flex items-center space-x-5flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md ">
            <CiSearch className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Enter your Query"
              className="flex-1 outline-none"
            />
            <button type="submit" hidden>
              search
            </button>
          </form>
          {/* Avatar */}
          <Avatar name="Gaurav Tiwari" round size="50" color="#0055D1" />
        </div>
      </div>
      <div className="flex items-center justify-center px-5 md:py-5">
        <p className="flex items-center text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1] mr-1">
          <FaRegUserCircle className="inline-block h-10 w-10 text-#0055D1 mr-1" />
          GPT is summarising the task of the day.
        </p>
      </div>{" "}
    </header>
  );
};

export default Header;
