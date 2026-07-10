import { useState } from "react";

const FilterButtons = ({ filterByName, filterByRating }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    filterByName(e.target.value);
  };

  return (
    <div className="bg-white rounded-lg shadow p-5">

      <h2 className="text-xl font-bold mb-4">
        Filters
      </h2>

      {/* Search by Name */}
      <div className="mb-6">
        <label className="font-semibold block mb-2">
          Search by Name
        </label>

        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Enter food name..."
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Rating */}
      <div>
        <label className="font-semibold block mb-2">
          Filter by Rating
        </label>

        <div className="space-y-2">
          <button
            className="block w-full bg-gray-200 rounded py-2"
            onClick={() => filterByRating(0)}
          >
            All
          </button>

          <button
            className="block w-full bg-red-500 text-white rounded py-2"
            onClick={() => filterByRating(4)}
          >
            4★ & Above
          </button>

          <button
            className="block w-full bg-red-500 text-white rounded py-2"
            onClick={() => filterByRating(4.5)}
          >
            4.5★ & Above
          </button>

          <button
            className="block w-full bg-red-500 text-white rounded py-2"
            onClick={() => filterByRating(4.8)}
          >
            4.8★
          </button>
        </div>
      </div>

    </div>
  );
};

export default FilterButtons;