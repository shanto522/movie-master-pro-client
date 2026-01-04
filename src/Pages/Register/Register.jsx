import { getAuth, updateProfile } from "firebase/auth"; // ✅ updateProfile import
import useAuth from "../../hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Register = () => {
  const { show, setShow, signUpFunc, signInWithPopupGoogleFunc, setUser } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignUp = async (e) => {
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
        "Password must include uppercase, lowercase, number & special character (min 6 chars)"
      );
      return;
    }

    try {
      // Firebase Sign Up
      const res = await signUpFunc(email, password);
      const auth = getAuth();

      // Firebase profile update
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });

      // Set user in context
      setUser({
        ...res.user,
        displayName: name,
        photoURL: photo,
      });

      // Send user data to backend
      await axiosSecure.post("/users", {
        name,
        email,
        photoURL: photo,
      });

      toast.success("Signup Successful!");
      navigate(from, { replace: true });
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        toast.error("This email is already registered. Please login.");
      } else {
        toast.error(e.message);
      }
    }
  };

  const handleGoogleLogIn = async () => {
    try {
      const res = await signInWithPopupGoogleFunc();
      setUser(res.user);

      // Send Google user to backend
      await axiosSecure.post("/users", {
        name: res.user.displayName,
        email: res.user.email,
        photoURL: res.user.photoURL,
      });

      toast.success("Login Successful!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-xl backdrop-blur-md border">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
            <span className="text-red-500">🎬</span> MovieMaster{" "}
            <span className="text-red-500">Pro</span>
          </h2>
          <p className="mt-2 text-sm">
            Create an account to start your movie journey 🎥
          </p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Photo URL</label>
            <input
              type="url"
              name="photo"
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1"
              required
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-4 bottom-4 cursor-pointer text-gray-500 hover:text-red-500"
            >
              {show ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#0967C2] text-white font-semibold rounded-lg shadow-md hover:shadow-lg"
          >
            Register
          </button>

          <button
            onClick={handleGoogleLogIn}
            type="button"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="font-medium">Continue with Google</span>
          </button>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-red-500 hover:text-red-400 font-medium"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
