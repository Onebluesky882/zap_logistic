import { GlobalContext } from "@/hooks/GlobalContext";
import { useContext, useEffect } from "react";

const Branches = () => {
  const { branches, readAllBranches } =
    useContext(GlobalContext).branchProvider;

  useEffect(() => {
    readAllBranches();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Branches</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {branches.map((branch, index) => (
          <li
            key={index}
            className="bg-white border rounded-lg shadow-sm p-4 hover:shadow-md transition"
          >
            <p className="text-lg font-medium text-blue-700">
              📍 {branch.location}
            </p>
            {/* You can add more info like name or address */}
            {/* <p className="text-sm text-gray-600">{branch.name}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Branches;
