import useAuth from "../../hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import React, { useRef } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";

const LogIn = () => {
  const {
    show,
    setShow,
    user,
    signInWithPopupGoogleFunc,
    setUser,
    signInFunc,
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const emailRef = useRef(null);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const regExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

    if (!regExp.test(password)) {
      toast.error(
        "Password must include uppercase, lowercase, number & special character (min 6 chars)"
      );
      return;
    }

    signInFunc(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Login Successful!");
        navigate(from, { replace: true });
      })
      .catch(() => {
        toast.error("Please enter valid email and password");
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

  if (user) return <Navigate to={from} replace />;

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 py-12 `}
    >
      <div
        className={`w-full max-w-md p-8 rounded-2xl shadow-xl backdrop-blur-md border `}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
            <span className="text-red-500">🎬</span> MovieMaster{" "}
            <span className="text-red-500">Pro</span>
          </h2>
          <p className="mt-2 text-sm">
            Login to manage your movie collection 🎥
          </p>
        </div>

        <form onSubmit={handleLogIn} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="Your Email"
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1 `}
              required
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1 `}
              required
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-4 bottom-4 cursor-pointer text-gray-500 hover:text-red-100"
            >
              {show ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <div className="text-right">
            <Link className="text-sm text-red-500 hover:text-red-400" to="#">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg"
          >
            Login
          </button>

          <button
            type="button"
            onClick={handleGoogleLogIn}
            className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg border `}
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="font-medium">Continue with Google</span>
          </button>

          <p className={`text-center text-sm mt-4`}>
            Don’t have an account?{" "}
            <Link
              to="/auth/register"
              className="text-red-500 hover:text-red-400 font-medium"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
