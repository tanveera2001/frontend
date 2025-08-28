import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import api from "./../../services/api";

const EducationPage = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  // Fetch education data from backend
  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await api.get("/api/education");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching education data:", error);
      }
    };

    fetchEducation();
  }, []);

  // Delete education item
  const handleDelete = async (id) => {
    console.log(`Demo delete called for tool/technology with id: ${id}`);
  };

  return (
    <div className="h-auto bg-gray-50 text-gray-900 p-6">
      <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">Education Dashboard</h1>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-gray-700">
          <thead className="text-xs uppercase bg-[#ccd9f8] text-[#000000]">
            <tr className="text-center">
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Time Period</th>
              <th className="px-6 py-3">Degree</th>
              <th className="px-6 py-3">Institution</th>
              <th className="px-6 py-3">Location</th>
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
                <td className="px-6 py-4 font-semibold">{item.startDate} - {item.endDate}</td>
                <td className="px-6 py-4 font-semibold">{item.degree}</td>
                <td className="px-6 py-4 font-semibold">{item.institution}</td>
                <td className="px-6 py-4 font-semibold">{item.location}</td>

                <td className="px-6 py-4 flex justify-center space-x-4">
                  <button
                    onClick={() => navigate(`/admin-panel/education/edit/${item._id}`)}
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

export default EducationPage;
