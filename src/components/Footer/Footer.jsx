import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="pt-12 pb-8 border-y px-6 sm:px-10 lg:px-16 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        <div className="space-y-3 text-center sm:text-left">
          <h2 className="text-3xl font-extrabold flex justify-center sm:justify-start items-center gap-2">
            <span className="text-red-500">🎬</span> MovieMaster{" "}
            <span className="text-red-500">Pro</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-xs mx-auto sm:mx-0 text-gray-700">
            Discover, manage, and organize your favorite movies — all in one
            place. Experience cinema your way.
          </p>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-3 border-b border-red-500 inline-block pb-1 text-gray-900">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-red-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/AllMovies"
                className="hover:text-red-400 transition-colors"
              >
                All Movies
              </a>
            </li>
            <li>
              <a
                href="/myCollection"
                className="hover:text-red-400 transition-colors"
              >
                My Collection
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-3 border-b border-red-500 inline-block pb-1 text-gray-900">
            Support
          </h3>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-red-400 transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a className="hover:text-red-400 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-red-400 transition-colors">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a className="hover:text-red-400 transition-colors">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-3 border-b border-red-500 inline-block pb-1 text-gray-900">
            Follow Us
          </h3>
          <div className="flex justify-center sm:justify-start space-x-6 mt-4">
            <FaFacebook
              size={28}
              className="hover:text-red-400 transition transform hover:scale-110 duration-200"
            />
            <FaSquareXTwitter
              size={28}
              className="hover:text-red-400 transition transform hover:scale-110 duration-200"
            />
            <FaInstagram
              size={28}
              className="hover:text-red-400 transition transform hover:scale-110 duration-200"
            />
            <FaYoutube
              size={28}
              className="hover:text-red-400 transition transform hover:scale-110 duration-200"
            />
          </div>
        </div>
      </div>

      <div className="border-t mt-10 pt-5 text-center text-sm text-gray-700">
        © 2025{" "}
        <span className="text-red-500 font-semibold">MovieMaster Pro</span> —
        All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
