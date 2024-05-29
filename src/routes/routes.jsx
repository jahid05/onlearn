import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import ErrorHandle from "../pages/ErrorHandle";
import Blog from "../pages/Blog";
import Course from "../pages/Course";
import Contact from "../pages/Contact";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard";
import AllCourses from "../pages/Dashboard/AllCourses";
import AddCourse from "../pages/Dashboard/AddCourse";
import UpdateCourse from "../pages/Dashboard/UpdateCourse";
import CourseDetails from "../pages/CourseDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorHandle />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "course",
        element: <Course />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "courseDetails/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/courses/${params.id}`),
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "allCourses",
        element: <AllCourses />,
      },
      {
        path: "addCourse",
        element: <AddCourse />,
      },
      {
        path: "updateCourse/:id",
        element: <UpdateCourse />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/courses/${params.id}`),
      },
    ],
  },
]);
