import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import api from './../../services/api';

const ToolsTechnologyPage = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  // Fetch tools and technologies from backend
  useEffect(() => {
    const fetchToolsTechnologies = async () => {
      try {
        const response = await api.get("api/tools-technologies");
        setItems(response.data); // <-- not response.data.data
      } catch (error) {
        console.error("Error fetching tools & technologies:", error);
      }
    };

    fetchToolsTechnologies();
  }, []);

  // Delete project function
  const handleDelete = (id) => {
    console.log(`Demo delete called for tool/technology with id: ${id}`);
  };

  return (
    <div className="h-auto bg-gray-50 text-gray-900 p-6">
      <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">Tools/Technology Dashboard</h1>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-gray-700">
          <thead className="text-xs uppercase bg-[#ccd9f8] text-[#000000]">
            <tr className="text-center">
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Experience</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id} className="bg-white border-b border-[#ccd9f8] hover:bg-[#ccd9f8] text-center">
                <td className="p-4 flex justify-center">
                  <img
                    src={`${import.meta.env.VITE_API_URL}/${item.image}`} 
                    alt={item.name}
                    className="w-20 h-20 object-contain"
                  />
                </td>
                <td className="px-6 py-4 font-semibold">{item.name}</td>
                <td className="px-6 py-4 font-semibold">{item.exp}</td>
                <td className="px-6 py-4 flex justify-center space-x-4">
                  <button
                    onClick={() => navigate(`/admin-panel/tools-technologies/edit/${item._id}`)}
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToolsTechnologyPage;
