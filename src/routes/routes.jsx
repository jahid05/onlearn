import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home"
import About from "../pages/About"
import ErrorHandle from "../pages/ErrorHandle";
import Blog from "../pages/Blog";
import Course from "../pages/Course";
import Contact from "../pages/Contact";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorHandle/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'course',
        element: <Course/>
      },
      {
        path: 'blog',
        element: <Blog/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'signIn',
        element: <SignIn/>
      },
      {
        path: 'signUp',
        element: <SignUp/>
      }
    ]
  },

]);