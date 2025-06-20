
import { useState } from "react";

const SmartCart = () => {
  const [items, setItems] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      setItems([...items, input.trim()]);
      setInput("");
    }
  };

  const handleSubmit = () => {
    // Later connect to backend Python logic
    alert("Items submitted: " + items.join(", "));
  };

  return (
    
      <div className="max-w-2xl mx-auto mt-10 px-4">
        <h2 className="text-2xl font-bold mb-4">🛒 Smart Cart Analyzer</h2>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter grocery item"
            className="flex-1 border rounded px-4 py-2"
          />
          <button
            onClick={handleAdd}
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>

        <ul className="list-disc pl-5 mt-4 text-gray-700">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <button
          onClick={handleSubmit}
          className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Analyze & Suggest Recipes
        </button>
      </div>
    
  );
};

export default SmartCart;


