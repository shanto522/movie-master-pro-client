import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../Loading/Loading";

const Profile = () => {
  const { user, signOutFunc, updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [updating, setUpdating] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  // Fetch profile from backend
  useEffect(() => {
    if (!user) return;
    const fetchProfile = async () => {
      try {
        const res = await axiosSecure.get("/profile");
        // profile fallback: login user data
        const profileData = {
          name: res.data.name || user.displayName || "",
          email: res.data.email || user.email,
          photoURL: res.data.photoURL || user.photoURL || "",
        };
        setProfile(profileData);
        reset(profileData); // populate form fields
      } catch (err) {
        toast.error("Failed to load profile");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [axiosSecure, reset, user]);

  if (loading) return <Loading />;

  const onSubmit = async (data) => {
    setUpdating(true);
    try {
      // ✅ 1️⃣ Firebase Auth update (GLOBAL)
      await updateUserProfile(data.name, data.photoURL);

      // ✅ 2️⃣ MongoDB update
      const res = await axiosSecure.put("/profile", data);

      // ✅ 3️⃣ Local state update
      setProfile({
        name: res.data.name,
        email: res.data.email,
        photoURL: res.data.photoURL,
      });

      toast.success("Profile updated successfully");
      setEditing(false);
      window.location.reload();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile");
    } finally {
      setUpdating(false);
    }
  };

  const displayPhoto = profile?.photoURL || "/default-avatar.png";

  return (
    <section className=" flex justify-center py-14 px-4">
      <div
        className="w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden
    bg-white dark:bg-gray-800"
      >
        {/* Header */}
        <div
          className="h-25 relative"
        >
          <div className="absolute left-1/2 -bottom-16 transform -translate-x-1/2">
            <img
              src={displayPhoto}
              alt="profile"
              className="w-32 h-32 rounded-full border-4 
          border-white dark:border-gray-700 
          shadow-xl object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="pt-20 pb-10 px-6">
          <div className="flex justify-between items-center mb-6">
            <h2
              className="text-2xl font-bold 
          text-gray-800 dark:text-gray-100"
            >
              My Profile
            </h2>

            <button
              onClick={() => {
                setEditing(!editing);
                reset(profile);
              }}
              className="px-4 py-2 rounded-xl font-semibold transition
          bg-blue-500 hover:bg-blue-600
          dark:bg-blue-600 dark:hover:bg-blue-700
          text-white"
            >
              {editing ? "Cancel" : "Edit"}
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label
                className="block mb-1 
            text-gray-600 dark:text-gray-300"
              >
                Full Name
              </label>

              <input
                {...register("name")}
                disabled={!editing}
                className={`w-full px-4 py-2 border rounded-xl transition
            focus:outline-none focus:ring-2 focus:ring-blue-400
            dark:focus:ring-blue-600
            ${
              editing
                ? "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                : "bg-gray-100 dark:bg-gray-600 text-gray-300"
            }`}
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="block mb-1 
            text-gray-600 dark:text-gray-300"
              >
                Email
              </label>

              <input
                {...register("email")}
                disabled
                className="w-full px-4 py-2 border rounded-xl cursor-not-allowed
            bg-gray-100 dark:bg-gray-600
            text-gray-500 dark:text-gray-300"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label
                className="block mb-1 
            text-gray-600 dark:text-gray-300"
              >
                Photo URL
              </label>

              <input
                {...register("photoURL")}
                disabled={!editing}
                className={`w-full px-4 py-2 border rounded-xl transition
            focus:outline-none focus:ring-2 focus:ring-blue-400
            dark:focus:ring-blue-600
            ${
              editing
                ? "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                : "bg-gray-100 dark:bg-gray-600 text-gray-300"
            }`}
              />
            </div>

            {editing && (
              <button
                type="submit"
                disabled={updating}
                className="w-full mt-4 px-4 py-2 rounded-xl font-semibold transition
            bg-green-500 hover:bg-green-600
            dark:bg-green-600 dark:hover:bg-green-700
            text-white"
              >
                {updating ? "Updating..." : "Save Changes"}
              </button>
            )}
          </form>

          {/* Logout */}
          <div className="mt-10 text-center">
            <button
              onClick={signOutFunc}
              className="px-10 py-3 rounded-xl font-semibold transition shadow-md
          bg-red-500 hover:bg-red-600
          dark:bg-red-600 dark:hover:bg-red-700
          text-white"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
