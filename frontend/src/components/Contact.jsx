import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios"; // Ensure axios is imported
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,  // Updated to match the schema
      email: data.email,
      message: data.message,
    };

    await axios
      .post("http://localhost:4001/message", userInfo) // Changed GET to POST
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Message sent successfully..");
          window.location.reload();
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="h-screen dark:text-black md:ml-24 ml-6 mt-6 flex items-center justify-center">
        <div className="md:w-[550px] w-[700px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className="font-bold text-3xl">Contact Us</h3>
              {/* Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="outline-none font-normal md:w-96 w-80 px-3 py-1 border rounded-md"
                  {...register("fullname", { required: true })} // Corrected "name" to "fullname"
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
                  placeholder="Email address"
                  className="outline-none font-normal md:w-96 w-80 px-3 py-1 border rounded-md"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    *This field is required*
                  </span>
                )}
              </div>
              {/* Message */}
              <div className="mt-5 space-y-2">
                <span>Message</span>
                <br />
                <textarea
                  placeholder="Type your message.."
                  className="outline-none font-normal md:w-96 w-80 h-32 py-1 px-3 border rounded-md"
                  {...register("message", { required: true })}
                />
                <br />
                {errors.message && (
                  <span className="text-sm text-red-500">
                    *This field is required*
                  </span>
                )}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-6">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
