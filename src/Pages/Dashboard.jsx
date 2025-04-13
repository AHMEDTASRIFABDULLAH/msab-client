import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import { MdEmojiEvents } from "react-icons/md";
import { BsFillMenuAppFill } from "react-icons/bs";
import { GiRunningShoe } from "react-icons/gi";
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard</title>
      </Helmet>
      <div className="flex flex-col sm:flex-row md:h-[100vh]  ">
        <div className="  shadow-inner border-r text-black flex flex-col text-xl  md:w-[20%] ">
          <Link
            className="hover:bg-purple-500 flex hover:font-semibold border-b-2  justify-between items-center  hover:text-white font-normal px-6 py-4"
            to="addmarathon"
          >
            Add jobs
            <MdEmojiEvents className="text-orange-500" />
          </Link>
          <Link
            className="hover:bg-purple-500  hover:font-semibold border-b-2 flex  justify-between items-center hover:text-white font-normal  px-6 py-4"
            to={`mymarathon/${user?.email}`}
          >
            My job posts
            <BsFillMenuAppFill className="text-red-600 " />
          </Link>
          <Link to={`applylist/${user?.email}`}>
            <button className=" w-full hover:bg-purple-500 hover:font-semibold border-b-2 flex justify-between  items-center hover:text-white font-normal  px-6 py-4">
              My apply lists
              <GiRunningShoe className="text-rose-500  " />
            </button>
          </Link>
        </div>
        <div className=" shadow-inner  bg-[#e7ede9] md:w-[80%] sm:flex sm:justify-center ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
