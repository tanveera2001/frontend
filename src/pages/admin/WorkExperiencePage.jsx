import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import api from './../../services/api';

const WorkExperiencePage = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  // Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/api/projects");
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
      await api.delete(`/api/projects/${id}`);
      setItems(items.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <div className="h-auto bg-gray-50 text-gray-900 p-6">
      <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">Work ExperiencePage Dashboard</h1>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs uppercase bg-[#ccd9f8] text-[#000000]">
            <tr>
              <th className="px-6 py-3 text-center">Title</th>
              <th className="px-6 py-3 text-center">Description</th>
              <th className="px-6 py-3 text-center">URL</th>
              <th className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id} className="bg-white border-b border-[#ccd9f8] hover:bg-[#ccd9f8]">
                <td className="px-6 py-4 font-semibold text-gray-900">{item.title}</td>
                <td className="px-6 py-4 font-semibold text-gray-900">{item.description}</td>
                <td className="px-6 py-4 font-semibold text-gray-900">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => navigate(`/admin-panel/projects/${item._id}`)}
                      className="text-blue-600 hover:text-blue-800 cursor-pointer"
                      title="Edit"
                    >
                      <FaEdit size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-600 hover:text-red-800 cursor-pointer"
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

export default WorkExperiencePage;
