import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ProjectsPage = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  // Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/projects"); // your GET route
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // Delete project function
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/projects/${id}`);
      setItems(items.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <div className="w-full max-w-screen-2xl mx-auto mt-12 bg-white border border-[#fcbf49] rounded-lg shadow-lg px-10 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#d62828]">All Projects</h1>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs uppercase bg-[#fefae0] text-[#3a5a40]">
            <tr>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Description</th>
              <th className="px-6 py-3">URL</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id} className="bg-white border-b hover:bg-[#fefae0]">
                <td className="px-6 py-4 font-semibold text-gray-900">{item.title}</td>
                <td className="px-6 py-4 font-semibold text-gray-900">{item.description}</td>
                <td className="px-6 py-4 font-semibold text-gray-900">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => navigate(`/admin-panel/projects/${item._id}`)}
                      className="text-blue-600 hover:text-blue-800"
                      title="Edit"
                    >
                      <FaEdit size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete"
                    >
                      <MdDelete size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsPage;
