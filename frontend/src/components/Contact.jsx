import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="h-screen dark:text-black ml-24 mt-10 flex items-center justify-center">
        <div className="w-[550px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              {/* <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link> */}

              <h3 className="font-bold text-3xl">Contact Us</h3>
              {/* name */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="outline-none font-normal w-96 px-3 py-1 border rounded-md"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    *This field is required*
                  </span>
                )}
              </div>
              {/* email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Email address"
                  className="outline-none font-normal w-96 px-3 py-1 border rounded-md"
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
                  className="outline-none font-normal w-96 h-32 py-1 px-3 border rounded-md"
                  {...register("message", { required: true })}
                />
                <br />
                {errors.message && (
                  <span className="text-sm text-red-500">
                    *This field is required*
                  </span>
                )}
              </div>
              {/* button */}
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
