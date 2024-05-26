/* eslint-disable react/no-unescaped-entities */
import { NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Zoom, toast } from "react-toastify";
import auth from "../firebase/firebase.config";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SignUp = () => {
  const navigate = useNavigate();
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  // const [createUserWithEmailAndPassword, user] =
  //   useCreateUserWithEmailAndPassword(auth);
  
  //   const handleSignUp = async (e) => {
  //     e.preventDefault();
      
  //     const form = e.target;
  //     const displayName = form.displayName.value;
  //     const photoURL = form.photoURL.value;
  //     const email = form.email.value;
  //     const password = form.password.value;
  //     const userData = {displayName, photoURL, email, password};
  //     await createUserWithEmailAndPassword(email, password);
  //     console.log(userData)
  //     navigate("/")
  //     e.target.reset();
  //   };

  const handleGoogleLogin = async () => {
    await signInWithGoogle();
    toast.success("Successful Sign In!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    });
    navigate("/");
  };
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
              name="displayName"
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
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="url"
              name="photoURL"
              placeholder="Photo"
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
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-theme-1 text-white">Sign Up</button>
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
