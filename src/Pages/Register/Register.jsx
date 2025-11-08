import React from "react";
import useAuth from "../../hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";

const Register = () => {
  const { show, setShow, signUpFunc, signInWithPopupGoogleFunc, setUser } =
    useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const regExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

    if (!regExp.test(password)) {
      toast.error(
        "Password must be at least 6 characters long, and include at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
      return;
    }

    signUpFunc(email, password)
      .then((res) => {
        const re = res.user;
        console.log(re);
        toast.success("Signup Successful!");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        if (e.code === "auth/email-already-in-use") {
          toast.error("This email is already registered. Please login.");
        } else {
          toast.error(e.message);
        }
      });
  };

  const handleGoogleLogIn = () => {
    signInWithPopupGoogleFunc()
      .then((res) => {
        setUser(res.user);
        toast.success("Login Successful!");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200 px-6 py-8">
        <div class="w-full max-w-md bg-gray-900/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-700">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-white flex items-center justify-center gap-2">
              <span class="text-red-500">🎬</span> MovieMaster{" "}
              <span class="text-red-500">Pro</span>
            </h2>
            <p class="text-gray-400 text-sm mt-2">
              Create an account to start your movie journey 🎥
            </p>
          </div>

          <form onSubmit={handleSignUp}>
            <div class="space-y-5">
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  required
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  required
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-300 mb-1">
                  Photo URL
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="https://your-photo-link.com"
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
                  name="password"
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

              <button
                type="submit"
                class="w-full py-3 bg-red-600 hover:bg-red-700 transition text-white font-semibold rounded-lg shadow-md hover:shadow-lg"
              >
                Register
              </button>

              <button
                onClick={handleGoogleLogIn}
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
                Already have an account?
                <Link
                  to="/auth/login"
                  class="text-red-400 hover:text-red-300 font-medium"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
