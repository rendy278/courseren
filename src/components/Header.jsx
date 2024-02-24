import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants";
import { mobileMenuVariants, navbarVariants } from "../constants/motion";
import { useResizeX, useScrollY } from "../hooks";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const resize = useResizeX(992);
  const scrolled = useScrollY(100);

  useEffect(() => {
    if (resize) setToggleMenu(false);
  }, [resize]);

  return (
    <motion.header
      layout
      variants={navbarVariants}
      initial="default"
      animate={scrolled ? "active" : "default"}
      transition={{ duration: 0.3 }}
      className="fixed flex items-center h-[70px] z-[1000] w-full border border-solid border-transparent bg-white"
    >
      <nav className="container flex items-center justify-between gap-x-16">
        <a href="/" className="text-2xl font-bold text-primary-60">
          CourseRen.
        </a>
        <div className="hidden lg:flex lg:justify-between w-full">
          <ul className="flex items-center gap-x-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="link">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-x-4">
            <button type="button" className="btn btn-outline">
              Sign Up
            </button>
            <button type="button" className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
        <div
          className={`header__menu-icon flex lg:hidden relative w-5 h-4 flex-shrink-0 cursor-pointer overflow-hidden ${
            toggleMenu ? "active" : ""
          }`}
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      {toggleMenu && (
        <AnimatePresence>
          <motion.nav
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute w-full top-0 bg-white inset-x-0 opacity-95 -z-10"
          >
            <div className="px-6 flex flex-col justify-between  pt-[80px]">
              <ul className="flex flex-col gap-y-4">
                {navLinks.map((link) => (
                  <li key={link.id} className="h-8">
                    <a href={`#${link.id}`} className="link text-xl">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4 py-2 mb-1">
                <button type="button" className="btn btn-outline">
                  Sign Up
                </button>
                <button type="button" className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </motion.nav>
        </AnimatePresence>
      )}
    </motion.header>
  );
};

export default Header;
