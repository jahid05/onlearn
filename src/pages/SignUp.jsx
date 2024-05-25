/* eslint-disable react/no-unescaped-entities */
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";

const SignUp = () => {
  const navigate = useNavigate();
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const handleGoogleLogin = async () => {
   await signInWithGoogle();
   navigate('/')
  };

//   console.log(user, loading, error);
  return (
    <div className="bg-theme-2 h-screen flex items-center justify-center">
      <div className="card shrink-0 w-full max-w-md shadow-2xl bg-white">
        <form className="px-8">
          <div className="pt-8 flex justify-center">
            <NavLink
              to={"/signIn"}
              style={({ isActive }) => ({
                background: isActive ? "#0B7077" : "#232D3F",
              })}
              className="btn bg-theme-1 w-1/2 border-none rounded-s-xl rounded-none px-14 text-white"
            >
              Sign in
            </NavLink>
            <NavLink
              to={"/signUp"}
              style={({ isActive }) => ({
                background: isActive ? "#0B7077" : "#232D3F",
                color: isActive ? "#FFFFFF" : "#FFFFFF",
              })}
              className="btn bg-theme-1 w-1/2 border-none rounded-e-xl rounded-none px-14 text-white"
            >
              Sign Up
            </NavLink>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <p className="text-sm">
                Already have an account?
                <Link className="font-semibold text-theme-1">Sign In</Link>
              </p>
            </label>
          </div>
          <div className="form-control">
            <button className="btn bg-theme-1 rounded-xl text-white">
              Sign in
            </button>
          </div>
        </form>
        <div className="px-8 pb-8">
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleLogin}
            className="btn w-full font-normal"
          >
            <FcGoogle className="text-3xl" />
            Sign in with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
