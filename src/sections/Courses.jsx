import { useState } from "react";
import { Course, SectionHeader } from "../components";
import { categories, courses } from "../constants";
import { getRandomElements } from "../utils";
import { motion } from "framer-motion";
import { centerVariants } from "../constants/motion";

const MotionCourse = motion(Course);

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [categorized, setCategorized] = useState(getRandomElements(courses, 6));

  const handleCategory = (item) => {
    setActiveCategory(item);
    if (item === "All") {
      setCategorized(getRandomElements(courses, 6));
    } else {
      const filteredCourses = courses.filter(
        (course) => course.category === item
      );
      setCategorized(getRandomElements(filteredCourses, 6));
    }
  };

  return (
    <section className="w-full">
      <div className="container">
        <div className="flex flex-col items-center gap-y-10">
          <SectionHeader
            title="Explore Our Comprehensive Course Catalog"
            link="#"
          />
          <motion.div
            variants={centerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "0px 0px -200px 0px", once: true }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center px-6 w-80 md:w-full overflow-x-scroll ">
              {categories.map((item, index) => (
                <div
                  className={`group flex items-center justify-center px-4 py-5 flex-grow bg-white rounded-t-4xl hover:bg-gray-30 ${
                    activeCategory === item ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => handleCategory(item)}
                >
                  <p className="text-lg md:text-2xl font-medium text-gray-10 group-hover:text-white cursor-pointer group-active:text-white transition-colors duration-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 w-96 md:w-full xl:w-full bg-gray-10 rounded-4xl p-3">
              {categorized.map((item) => (
                <MotionCourse
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  category={item.category}
                  difficulty={item.difficulty}
                  thumbnail={item.thumbnail}
                  instructor={{
                    name: item.instructor.name,
                    pic: item.instructor.pic,
                  }}
                  rating={item.rating}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
