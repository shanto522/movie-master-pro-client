import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer class="bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-12 pb-8 px-6 sm:px-10 lg:px-16">
        <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div class="space-y-3 text-center sm:text-left">
            <h2 class="text-3xl font-extrabold text-white flex justify-center sm:justify-start items-center gap-2">
              <span class="text-red-500">🎬</span> MovieMaster{" "}
              <span class="text-red-500">Pro</span>
            </h2>
            <p class="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto sm:mx-0">
              Discover, manage, and organize your favorite movies — all in one
              place. Experience cinema your way.
            </p>
          </div>

          <div class="text-center sm:text-left">
            <h3 class="text-lg font-semibold text-white mb-3 border-b border-red-500 inline-block pb-1">
              Quick Links
            </h3>
            <ul class="space-y-2">
              <li>
                <a href="/" class="hover:text-red-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/AllMovies" class="hover:text-red-400 transition">
                  All Movies
                </a>
              </li>
              <li>
                <a href="/myCollection" class="hover:text-red-400 transition">
                  My Collection
                </a>
              </li>
            </ul>
          </div>

          <div class="text-center sm:text-left">
            <h3 class="text-lg font-semibold text-white mb-3 border-b border-red-500 inline-block pb-1">
              Support
            </h3>
            <ul class="space-y-2">
              <li>
                <a class="hover:text-red-400 transition">Help Center</a>
              </li>
              <li>
                <a class="hover:text-red-400 transition">Privacy Policy</a>
              </li>
              <li>
                <a class="hover:text-red-400 transition">Terms & Conditions</a>
              </li>
              <li>
                <a class="hover:text-red-400 transition">Contact Us</a>
              </li>
            </ul>
          </div>

          <div class="text-center sm:text-left">
            <h3 class="text-lg font-semibold text-white mb-3 border-b border-red-500 inline-block pb-1">
              Follow Us
            </h3>
            <div class="flex justify-center sm:justify-start space-x-6 mt-4">
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

        <div class="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
          © 2025 <span class="text-red-500 font-semibold">MovieMaster Pro</span>{" "}
          — All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
