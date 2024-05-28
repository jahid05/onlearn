import CourseCategories from "../components/home/CourseCategories";
import Hero from "../components/home/Hero";
import PopularCourses from "../components/home/PopularCourses";

const Home = () => {
    return (
        <div className="">
            <Hero/>
            <CourseCategories/>
            <PopularCourses/>
        </div>
    );
};

export default Home;