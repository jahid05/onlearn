import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const details = useLoaderData();
  const {
    image,
    title,
    slogan,
    price,
    off_price,
    duration,
    lectures,
    project,
    description,
  } = details;
  return (
    <div className="container mx-auto lg:px-0 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 py-20 gap-8">
        <div className="">
          <p className="py-2 text-xl text-theme-1 font-semibold">{slogan}</p>
          <h2 className="text-4xl py-2 font-semibold text-black">{title}</h2>
          <div className="flex flex-wrap gap-4 py-6">
            <div className="bg-theme-2 p-6 text-center rounded-2xl text-xl text-black font-semibold">
              Months
              <p>{duration? duration : 6}</p>
            </div>
            <div className="bg-theme-2 p-6 text-center rounded-2xl text-xl text-black font-semibold">
              Lectures
              <p>{lectures? lectures : 45}</p>
            </div>
            <div className="bg-theme-2 p-6 text-center rounded-2xl text-xl text-black font-semibold">
              Projects
              <p>{project? project : 15}+</p>
            </div>
          </div>
          <p className="text-gray-500 text-lg">{description}</p>
          <div className="flex gap-x-8 py-4">
            <p className="text-xl text-theme-1 font-semibold">
              Discount Price ${off_price}
            </p>
            <p className="text-xl text-gray-500 font-semibold">
              Regular: <del>${price}</del>
            </p>
          </div>
          <div className="flex flex-wrap gap-4 py-4">
            <button className="btn bg-theme-1 text-white">Enroll Now</button>
            <button className="btn bg-theme-3 text-white">Free Class</button>
          </div>
        </div>
        <div className="">
          <div className="shadow-2xl">
            <img
              className="rounded-2xl border-b-8 border-theme-1"
              src={image}
              alt="Course Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
