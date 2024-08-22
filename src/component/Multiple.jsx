import React, { useState } from "react";

const MultiSelect = ({ options, label }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = (option) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((o) => o !== option)
        : [...prevSelected, option]
    );
  };

  return (
    <div className="w-full">
      <label className="block text-white text-sm font-bold mb-2">{label}</label>
      <div className="relative">
        <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:shadow-outline">
          {selectedOptions.length > 0
            ? selectedOptions.join(", ")
            : "Select options"}
        </button>
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => toggleOption(option)}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                selectedOptions.includes(option) ? "bg-gray-200" : ""
              }`}
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => toggleOption(option)}
                className="mr-2"
              />
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiSelect;
