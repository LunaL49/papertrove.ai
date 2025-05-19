import { useState, useEffect } from "react";

export default function Digest_length({
  handleNext,
  handlePrev,
  handleChange,
}) {
  const [scale, setScale] = useState(5);

  useEffect(() => {
    handleChange("digest_length", scale);
  }, [scale, handleChange]);

  return (
    <>
      <div>
        <h2 className="text-xl font-bold text-gray-700">
          Maximum number of research articles per digest?
        </h2>
        <p className="text-sm font-normal mb-6 text-gray-500">
          There may be fewer if there aren't enough sufficiently relevant
          articles published since the last digest.
        </p>
      </div>
      <input
        type="range"
        min="3"
        max="10"
        step="1"
        value={scale}
        onChange={(e) => setScale(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 mb-2 rounded-lg appearance-none accent-[#0fa3b1]"
      />
      <div className="flex justify-between text-sm text-gray-500 px-1">
        {[...Array(8)].map((_, i) => (
          <span key={i}>{i + 3}</span>
        ))}
      </div>

      <div className="mb-10" />

      <div className="flex justify-between w-full">
        <button
          onClick={handlePrev}
          className="bg-[#0fa3b1] text-white text-[18px] px-6 py-2 rounded shadow-xl origin-bottom-left transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="bg-[#0fa3b1] text-white text-[18px] px-6 py-2 rounded shadow-xl origin-bottom-right transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          ▶
        </button>
      </div>
    </>
  );
}
