import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterFill,
} from "react-icons/ri";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-[70px] bg-gray-10 relative">
      <div className="container py-8">
        <div className="flex flex-col">
          <div className="flex items-center justify-between flex-wrap gap-8">
            <div className="footer-col">
              <h2 className="text-2xl font-bold text-primary-60">CourseRen</h2>
              <p className="text-base !leading-[normal] text-gray-80">
                Explore a world of knowledge and skills at your fingertips, from
                business and technology to the arts and beyond
              </p>
              <div className="flex items-center gap-x-4">
                <a href="#">
                  <RiFacebookCircleFill size={32} className="social-icon" />
                </a>
                <a href="#">
                  <RiInstagramFill size={32} className="social-icon" />
                </a>
                <a href="#">
                  <RiTwitterFill size={32} className="social-icon" />
                </a>
              </div>
            </div>
            <div className="footer-col">
              <p className="footer-heading">Quick Links</p>
              <div className="flex flex-col gap-y-2">
                <a href="#" className="footer-link">
                  Home
                </a>
                <a href="#" className="footer-link">
                  About
                </a>
                <a href="#" className="footer-link">
                  Popular
                </a>
                <a href="#" className="footer-link">
                  Instructors
                </a>
                <a href="#" className="footer-link">
                  Blog
                </a>
              </div>
            </div>
            <div className="footer-col ">
              <p className="footer-heading">Contact Information</p>
              <div className="flex-col items-center text-base  text-gray-80">
                <h5>Address: Dki Jakarta, Jakarta Barat</h5>
                <h5>Email: courseren@gmail.com</h5>
                <h5>Phone: (+62) 831 2289 5534</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom absolute bottom-0 w-full  bg-gray-20 text-gray-80 py-4 px-4 text-center flex justify-between">
        <p>&copy; {currentYear} CourseRen. All rights reserved.</p>
        <div className="flex gap-3">
          <p className="text-base !leading-[normal] cursor-pointer hover:text-primary-50">
            Privacy Policy
          </p>
          <p className="text-base !leading-[normal] cursor-pointer hover:text-primary-50">
            Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
