import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../UseContext/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// import { FcEditImage } from "react-icons/fc";

const NewsUpdatePage = () => {
  const { user } = useContext(AuthContext);
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://alumni-managemnet-app-server.vercel.app/all-news/${user?.email}`)
        .then((data) => setNews(data.data))
        .catch((error) => console.error(error));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    const agree = window.confirm(`Are want to Delete ?`);

    if (agree) {
      fetch(`https://alumni-managemnet-app-server.vercel.app/news/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success(`Delete Successfully.`);
          }
        });
    }
  };

  return (
    <div className="w-9/12 mx-auto my-16">
      <div>
        <h2 className="text-2xl ">Show all news for update and delete</h2>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>New Name</th>
                <th>Author Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {news?.length &&
                news?.map((allNews, i) => (
                  <tr>
                    <th>{i + 1}</th>

                    <td>{allNews.heading}</td>
                    <td>{allNews.author}</td>
                    <td>
                      {" "}
                      <Link to={`/newsUpdate/${allNews?._id}`}>
                        {" "}
                        <FaEdit className="text-xl cursor-pointer"></FaEdit>{" "}
                      </Link>
                    </td>
                    <td>
                      <span
                        onClick={() => handleDelete(allNews?._id)}
                        className="p-2 bg-primary text-white cursor-pointer"
                      >
                        Delete
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NewsUpdatePage;
