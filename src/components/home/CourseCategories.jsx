import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../sectionTitle/SectionTitle";

const CourseCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  //   console.log(categories);
  return (
    <div className="container mx-auto lg:px-0 px-6">
      <SectionTitle title="Courses Category"></SectionTitle>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 py-12">
        {categories?.map((category) => (
          <div
            key={category?.id}
            className="card shadow-md hover:bg-theme-1 text-black hover:text-white duration-300 bg-theme-2"
          >
            <div className="card-body items-center text-center">
              <figure className="md:w-24 ">
                <img src={category.image} alt="Category Image" />
              </figure>
              <div className="">
                <p className="text-lg font-semibold">{category.title}</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCategories;
