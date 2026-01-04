import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="pt-12 pb-8 border px-6 sm:px-10 lg:px-16">
      <div className="max-w-[1340px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

        {/* Brand Info */}
        <div className="space-y-3 text-center sm:text-left">
          <h2 className="text-3xl font-extrabold flex justify-center sm:justify-start items-center gap-2">
            <span className="text-red-500">🎬</span>
            MovieMaster <span className="text-red-500">Pro</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
            Discover, manage, and organize your favorite movies — all in one
            place. Experience cinema your way.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-3 border-b border-red-500 inline-block pb-1">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-red-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/allMovies"
                className="hover:text-red-400 transition-colors"
              >
                All Movies
              </Link>
            </li>
            <li>
              <Link
                to="/myCollection"
                className="hover:text-red-400 transition-colors"
              >
                My Collection
              </Link>
            </li>
            <li>
              <Link
                to="/addMovie"
                className="hover:text-red-400 transition-colors"
              >
                Add Movie
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-3 border-b border-red-500 inline-block pb-1">
            Support
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/help" className="hover:text-red-400 transition-colors">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-red-400 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-red-400 transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-400 transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="text-center sm:text-left space-y-4">
          <h3 className="text-lg font-semibold border-b border-red-500 inline-block pb-1">
            Contact
          </h3>

          <div className="space-y-2 text-sm">
            <p className="flex items-center justify-center sm:justify-start gap-2">
              <MdEmail className="text-red-500" />
              support@moviemasterpro.com
            </p>
            <p className="flex items-center justify-center sm:justify-start gap-2">
              <MdPhone className="text-red-500" />
              +880 1234-567890
            </p>
            <p className="flex items-center justify-center sm:justify-start gap-2">
              <MdLocationOn className="text-red-500" />
              Dhaka, Bangladesh
            </p>
          </div>

          <div className="flex justify-center sm:justify-start space-x-6 pt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 transition transform hover:scale-110 duration-200"
            >
              <FaFacebook size={26} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 transition transform hover:scale-110 duration-200"
            >
              <FaSquareXTwitter size={26} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 transition transform hover:scale-110 duration-200"
            >
              <FaInstagram size={26} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 transition transform hover:scale-110 duration-200"
            >
              <FaYoutube size={26} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t mt-10 pt-5 text-center text-sm">
        © 2025{" "}
        <span className="text-red-500 font-semibold">
          MovieMaster Pro
        </span>{" "}
        — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
