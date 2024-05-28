import SectionTitle from "../sectionTitle/SectionTitle";
import CourseSlides from "../slides/CourseSlides";

const PopularCourses = () => {
    return (
        <div className="container mx-auto lg:px-0 px-6">
            <SectionTitle title="Popular Courses" />
            <CourseSlides/>
        </div>
    );
};

export default PopularCourses;