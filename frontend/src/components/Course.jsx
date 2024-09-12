import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-32 items-center justify-center text-center ">
          <h1 className="text-2xl font-medium md:text-3xl">
            We're delighted to have you{" "}
            <span className="text-pink-500 font-semibold">Here! :)</span>
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            illo. Alias porro odio aut nam! Magni doloribus rem necessitatibus
            iusto dolorum inventore delectus quibusdam architecto quae
            consectetur. Itaque nam natus molestiae quod ipsum. Fugit distinctio
            optio perferendis, excepturi possimus inventore eum velit explicabo
            tempora illo omnis.!
          </p>

          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
