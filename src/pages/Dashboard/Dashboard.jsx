import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import auth from "../../firebase/firebase.config";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Zoom, toast } from "react-toastify";
const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [signOut] = useSignOut(auth);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleSignOut = async () => {
    await signOut();

    toast.success("Successful Sign Out!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Zoom,
    });
    navigate("/");
  };
  return (
    <div className="">
      <div className="w-72 bg-theme-3 md:fixed z-20">
        <div
          onClick={() => setOpen(!open)}
          className="flex justify-between lg:hidden "
        >
          {open === true ? (
            <span className="text-3xl text-theme-1 absolute top-6 right-6 z-20">
              <FaXmark></FaXmark>
            </span>
          ) : (
            <span className="text-2xl text-theme-1 absolute top-6 left-6 z-20">
              <FaBarsStaggered></FaBarsStaggered>
            </span>
          )}
        </div>
        <nav
          className={`flex flex-col z-10 bg-theme-3 items-center justify-evenly w-full h-screen shadow-2xl text-theme-1 font-semibold absolute lg:static transition-all duration-500 ${
            open ? "left-0" : "-left-full"
          }`}
        >
          <div className="flex flex-col items-center">
            <figure className="rounded-full w-28 h-28 border-2 border-theme-1 p-1">
              <img
                className="rounded-full w-full h-full"
                src={user?.photoURL}
                alt="Profile Picture"
              />
            </figure>
          </div>
          <ul
            onClick={() => setOpen(!open)}
            className="grid grid-cols-1 gap-y-5"
          >
            <NavLink
              to={"allCourses"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-theme-1 border-b border-theme-1 text-lg hover:border-b px-2 duration-500"
                  : "text-white text-lg hover:border-b hover:border-theme-1 px-2 border-b  border-transparent hover:text-theme-1 font-normal duration-500"
              }
            >
              All Course
            </NavLink>
            <NavLink
              to={"addCourse"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-theme-1 border-b border-theme-1 text-lg hover:border-b px-2 duration-500"
                  : "text-white text-lg hover:border-b hover:border-theme-1 px-2 border-b  border-transparent hover:text-theme-1 font-normal duration-500"
              }
            >
              Add Course
            </NavLink>
          </ul>
          <div className="flex gap-2">
            <Link to={"/"} className="btn  border-none">
              Home Page
            </Link>
            <button
              onClick={handleSignOut}
              className="btn bg-theme-1 border-none text-white"
            >
              Sign Out
            </button>
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
