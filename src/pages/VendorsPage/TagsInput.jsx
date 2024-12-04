import React, { useState } from "react";

const TagsInput = () => {
  const [tags, setTags] = useState(["T-Shirt", "Fashion", "Casual"]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTag = () => {
    if (inputValue.trim() && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]);
    }
    if (!selectedTags.includes(inputValue) && inputValue.trim()) {
      setSelectedTags([...selectedTags, inputValue]);
    }
    setInputValue("");
  };

  const handleRemoveTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">Tags</label>
      <div className="flex flex-wrap items-center gap-2 border border-gray-300 rounded-md p-2">
        {selectedTags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-600 rounded-md"
          >
            <span>{tag}</span>
            <button
              onClick={() => handleRemoveTag(tag)}
              className="text-blue-600 hover:text-blue-800"
            >
              &times;
            </button>
          </div>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTag()}
          placeholder="Add a tag"
          className="flex-1 p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
          <button
            key={index}
            onClick={() =>
              !selectedTags.includes(tag) &&
              setSelectedTags([...selectedTags, tag])
            }
            className={`px-2 py-1 rounded-md border ${
              selectedTags.includes(tag)
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagsInput;
