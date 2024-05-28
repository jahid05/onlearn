import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="bg-gray-900 lg:px-20 px-6">
      <div className="text-center">
        <SectionTitle title="All Course"/>
        <div className="lg:py-10 lg:ps-64 grid lg:grid-cols-4 gap-6">
          {
            courses?.map((course) => (
              <Card key={course.id} course={course} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
