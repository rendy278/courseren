import { SectionHeader, SliderNavigation } from "../components";
import { register } from "swiper/element/bundle";
import { instructors } from "../constants";
import "swiper/css";
import { motion } from "framer-motion";
import { centerVariants } from "../constants/motion";
import Instructor from "../components/Instructor";
import { useRef, useEffect } from "react";
register();
const Instructors = () => {
  const sliderRef = useRef(null);
  const swiperParams = {
    spaceBetween: 16,
    grabCursor: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  };

  useEffect(() => {
    sliderRef.current && Object.assign(sliderRef.current, swiperParams);
  }, []);

  return (
    <section id="instructors">
      <div className="container">
        <div className="flex flex-col gap-y-10 ">
          <SectionHeader title="Meet Our Expert Instructors" link="#" />
          <motion.div
            variants={centerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "0px 0px -200px", once: true }}
            className="flex flex-col gap-y-4"
          >
            <swiper-container ref={sliderRef}>
              {instructors.map((item) => {
                return (
                  <swiper-slide key={item.id}>
                    <Instructor
                      id={item.id}
                      name={item.name}
                      speciality={item.specialty}
                      pic={item.pic}
                      rating={item.rating}
                    />
                  </swiper-slide>
                );
              })}
            </swiper-container>
            <SliderNavigation ref={sliderRef} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
