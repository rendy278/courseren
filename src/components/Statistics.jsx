import { motion } from "framer-motion";
import { statistics } from "../constants/index";
import { centerVariants } from "../constants/motion";
const Statistics = () => {
  return (
    <motion.div
      variants={centerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "0px 0px -200px 0px", once: true }}
      className="py-[70px]"
    >
      <div className="container">
        <div
          className="flex justify-center lg:justify-between items-center flex-wrap
            gap-8 rounded-4xl bg-gray-10 py-14 px-20 border border-primary-50"
        >
          {statistics.map((sta, index) => {
            return (
              <div
                key={index}
                className="w-[145px] flex  flex-col items-center gap-y-4"
              >
                <h1 className="text-h1  text-primary-50">{sta.number}</h1>
                <p className="text-xl text-center text-gray-90">{sta.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Statistics;
