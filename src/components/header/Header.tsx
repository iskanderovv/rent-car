import { CiFilter } from "react-icons/ci";
import { RiSearch2Line } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.png";

const Header = () => {
  return (
    <div className=" bg-white">
      <div className="h-[124px] container flex justify-between items-center">
        <div className="flex flex-1 items-center gap-x-16">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="flex flex-1 items-center h-11 rounded-[70px] max-w-[494px] px-5 gap-x-5 border border-gray">
            <RiSearch2Line className="text-3xl cursor-pointer text-dark-gray" />
            <input
              type="text"
              className="outline-none w-full bg-transparent"
              placeholder="Search something here"
            />
            <CiFilter className="text-3xl cursor-pointer text-dark-gray" />
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          {[
            [<AiFillHeart />, <IoIosNotifications />, <IoMdSettings />].map(
              (item, index) => (
                <div
                  key={index}
                  className="border border-gray text-2xl text-dark-gray cursor-pointer size-11  rounded-full flex items-center justify-center"
                >
                  {item}
                </div>
              )
            ),
          ]}
          <Link to="/profile">
            <img src={avatar} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
