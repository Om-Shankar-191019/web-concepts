import { useState } from "react";

export default function App() {
  const [countValue, setCountValue] = useState(0);
  return (
    <div className="flex justify-center mt-10">
      <div className="h-64 w-1/2 border border-red-400 flex items-center justify-center flex-col">
        <h1 className="text-lg mb-12">{countValue}</h1>
        <div>
          <button
            type="button"
            onClick={() => setCountValue(countValue + 1)}
            className="border border-red-400 px-4 py-2 ml-2 mr-2"
          >
            Increment
          </button>
          <button
            type="button"
            onClick={() => setCountValue((prev) => prev - 1)}
            className="border border-red-400 px-4 py-2 ml-2 mr-2"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
