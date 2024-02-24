import { useRef, useEffect } from "react";
import { Blog, SectionHeader, SliderNavigation } from "../components";
import { register } from "swiper/element/bundle";
import { blogs } from "../constants";
import { motion } from "framer-motion";
import { centerVariants } from "../constants/motion";
import "swiper/css";
register();
const Blogs = () => {
  const sliderRef = useRef(null);
  const swiperParams = {
    spaceBetween: 16,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
    },
  };

  useEffect(() => {
    sliderRef.current && Object.assign(sliderRef.current, swiperParams);
  }, []);
  return (
    <section id="blog">
      <div className="container">
        <motion.div
          variants={centerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "0px 0px -200px", once: true }}
          className="flex flex-col gap-y-10"
        >
          <SectionHeader title="Insights and Knowledge Hub" link="#" />
          <div className="flex flex-col gap-y-4 ">
            <swiper-container ref={sliderRef}>
              {blogs.map((item) => {
                return (
                  <swiper-slide key={item.id}>
                    <Blog
                      id={item.id}
                      thumbnail={item.thumbnail}
                      title={item.title}
                      description={item.description}
                    />
                  </swiper-slide>
                );
              })}
            </swiper-container>
            <SliderNavigation ref={sliderRef} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
