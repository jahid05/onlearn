import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useSignOut } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";

const Navbar = ({user}) => {
  const [signOut] = useSignOut(auth);
  const handleSignOut = () => {
    signOut();
  };
  console.log(user);
  const navItem = (
    <>
      <NavLink
        to={"/"}
        className="text-[18px] mx-8 border-b p-1 border-transparent hover:border-theme-1  hover:text-theme-1 duration-300 hover:scale-110 "
      >
        Home
      </NavLink>
      <NavLink
        to={"/course"}
        className="text-[18px] mx-8 border-b p-1 border-transparent hover:border-theme-1  hover:text-theme-1 duration-300 hover:scale-110 "
      >
        Course
      </NavLink>
      <NavLink
        to={"/blog"}
        className="text-[18px] mx-8 border-b p-1 border-transparent hover:border-theme-1  hover:text-theme-1 duration-300 hover:scale-110 "
      >
        Blog
      </NavLink>
      <NavLink
        to={"/about"}
        className="text-[18px] mx-8 border-b p-1 border-transparent hover:border-theme-1  hover:text-theme-1 duration-300 hover:scale-110 "
      >
        About
      </NavLink>
      <NavLink
        to={"/contact"}
        className="text-[18px] mx-8 border-b p-1 border-transparent hover:border-theme-1  hover:text-theme-1 duration-300 hover:scale-110 "
      >
        Contact
      </NavLink>
    </>
  );
  return (
    <div className="sticky top-0 pt-6 z-20 bg-theme-2">
      <div className="navbar container mx-auto bg-white rounded-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <Link to={"/"} className="">
            <img src={logo} alt="On-learn" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end lg:gap-4">
          {user ? (
            <>
              <button onClick={handleSignOut} className="btn bg-red-300">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                to={"/signIn"}
                className="btn font-light bg-white border-none text-theme-1 md:px-8 md:py-4 text-[16px] rounded-xl hover:bg-theme-3 hover:text-white duration-500"
              >
                Sign in
              </Link>
              <Link
                to={"/signUp"}
                className="btn font-light bg-theme-1 border-none text-white md:px-8 md:py-4 text-[16px] rounded-xl hover:bg-theme-3 duration-500"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
