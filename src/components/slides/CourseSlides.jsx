import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay} from "swiper/modules";

import { useEffect, useState } from "react";

import axios from "axios";
import dateFormat from "dateformat";

const CourseSlides = () => {
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
    <div className="py-12 px-6 lg:px-0">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {courses?.map((course) => (
          <SwiperSlide key={course?.id}>
            <div className="card card-compact bg-gray-100">
              <figure className="">
                <img src={course?.image} alt="Course" />
              </figure>
              <div className="mx-auto bg-white  -mt-7 px-2 py-1 rounded-full">
                <div className="avatar-group -space-x-5 rtl:space-x-reverse items-center">
                  <div className="avatar">
                    <div className="w-9">
                      <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-9">
                      <img src="https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-9">
                      <img src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-9">
                      <img src="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" />
                    </div>
                  </div>
                  <div className="px-5 font-semibold">
                    <p> + {course.student} students</p>
                  </div>
                </div>
              </div>
              <div className="card-body h-52">
                <p>{dateFormat(course?.date, "dS mmmm yyyy")}</p>
                <h2 className="text-lg font-semibold text-theme-1">
                  {course?.title}
                </h2>
                <p>{course?.slogan}</p>
                <div className="card-actions justify-between py-2">
                  <div className="flex gap-2 py-2">
                    <p className="text-xl text-theme-1 font-semibold">
                      ${course?.off_price}
                    </p>
                    <p className="text-xl text-gray-500 font-semibold">
                      <del>${course?.price}</del>
                    </p>
                  </div>
                  <button className="btn bg-theme-1 text-white ">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CourseSlides;
