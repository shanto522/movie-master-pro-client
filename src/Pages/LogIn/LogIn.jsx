import React from "react";
import useAuth from "../../hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LogIn = () => {
  const { show, setShow } = useAuth();
  return (
    <div>
      <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200 px-6">
        <div class="w-full max-w-md bg-gray-900/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-700">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-white flex items-center justify-center gap-2">
              <span class="text-red-500">🎬</span> MovieMaster{" "}
              <span class="text-red-500">Pro</span>
            </h2>
            <p class="text-gray-400 text-sm mt-2">
              Login to manage your movie collection 🎥
            </p>
          </div>

          <form>
            <div class="space-y-5">
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  required
                />
              </div>

              <div className="relative">
                <label class="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  placeholder="••••••••"
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  required
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[20px] top-[40px] cursor-pointer z-50"
                >
                  {show ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>

              <div class="text-right">
                <a class="text-sm text-red-400 hover:text-red-300 transition">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                class="w-full py-3 bg-red-600 hover:bg-red-700 transition text-white font-semibold rounded-lg shadow-md hover:shadow-lg"
              >
                Login
              </button>

              <button
                type="button"
                class="w-full flex items-center justify-center gap-2 py-3 border border-gray-600 text-gray-200 rounded-lg hover:bg-gray-800 transition"
              >
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  alt="Google"
                  class="w-5 h-5"
                />
                Continue with Google
              </button>

              <p class="text-center text-sm text-gray-400 mt-4">
                Don’t have an account?
                <a
                  href="/register"
                  class="text-red-400 hover:text-red-300 font-medium"
                >
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
