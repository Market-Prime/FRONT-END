import React, { useState } from "react";

const DropdownWithAddOption = ({ initialOptions }) => {
  const [options, setOptions] = useState(initialOptions);
  const [newOption, setNewOption] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleAddOption = () => {
    if (newOption.trim() && !options.includes(newOption)) {
      setOptions([...options, newOption]);
      setNewOption("");
    }
  };

  return (
    <div className="relative">
      <select
        className="border border-gray-300 rounded-md py-2 px-3 w-full text-sm"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="" disabled>Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="mt-2 flex space-x-2">
        <input
          type="text"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          placeholder="Add new option"
          className="border border-gray-300 rounded-md py-2 px-3 w-full text-sm"
        />
        <button
          onClick={handleAddOption}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-sm"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default DropdownWithAddOption;
