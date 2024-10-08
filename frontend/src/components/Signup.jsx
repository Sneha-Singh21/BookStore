import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Login from "./Login.jsx";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);

      if (res.data) {
        toast.success("Signed in Successfully..");
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        navigate(from, { replace: true }); // Only navigate after the data is set
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="h-screen dark:text-black flex md:ml-0 ml-8 items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              {/* Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="outline-none font-normal w-80 px-3 py-1 border rounded-md"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    *This field is required*
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="outline-none font-normal w-80 px-3 py-1 border rounded-md"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    *This field is required*
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mt-5 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password" // Make sure this is type="password" for security
                  placeholder="Enter your password"
                  className="outline-none font-normal w-80 py-1 px-3 border rounded-md"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    *This field is required*
                  </span>
                )}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-6">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300">
                  Signup
                </button>
                <p className="text-lg">
                  Have an account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                </p>
                <Login />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
