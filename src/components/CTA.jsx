import ctaBackground from "../assets/cta-bg.png";
import { centerVariants } from "../constants/motion";
import { motion } from "framer-motion";
const CTA = () => {
  return (
    <motion.div
      variants={centerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "0px 0px -200px", once: true }}
      className="py-[70px]"
    >
      <div className="container h-[400px]">
        <div
          className="flex flex-col justify-center text-center items-center gap-y-8 w-full h-full px-4 rounded-4xl border border-solid border-gray-10"
          style={{
            backgroundImage: `url(${ctaBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="relative section-title-after text-h2 text-gray-10">
            Join Our Learning <br /> Community
          </h2>
          <form className="w-full max-w-[550px]">
            <div className="flex items-center border border-solid border-gray-10 rounded-full h-14 p-1.5 overflow-hidden">
              <input
                type="text"
                name="email"
                id="email"
                className="outline-0 bg-transparent px-4 w-full text-base placeholder:text-gray-40"
                placeholder="Enter Your Email"
                autoComplete="off"
              />
              <button
                type="submit"
                className="flex items-center justify-center rounded-full flex-shrink-0 border border-solid border-gray-10 w-11 h-11"
              >
                <svg
                  width="20"
                  height="51"
                  viewBox="0 0 71 51"
                  className="w-[26px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="transition-colors duration-300 group-hover:stroke-white"
                    d="M0.612732 25.4016H64.4928M38.4571 1.9472C43.2016 10.3343 51.0356 19.7372 64.4928 25.4472C51.0356 31.1572 43.2016 40.5601 38.4571 48.9472"
                    stroke="#292C32"
                    stroke-width="4.5"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default CTA;
