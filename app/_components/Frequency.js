import { useState, useEffect } from "react";

const options = [
  { label: "Weekly: every Monday", value: "weekly" },
  { label: "Biweekly: every Monday and Thursday", value: "biweekly" },
  { label: "Daily: every working day", value: "daily" },
];

export default function Frequency({ handleNext, handlePrev, handleChange }) {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    handleChange("frequency", selected);
  }, [selected, handleChange]);

  return (
    <>
      <div>
        <h2 className="text-xl font-bold mb-6 text-gray-700">
          How frequently would you like to receive your research digests?
        </h2>
      </div>

      {options.map((option) => (
        <label
          key={option.value}
          className={`flex items-center p-3 rounded-xl cursor-pointer border-2 mb-2 ${
            selected === option.value ? "border-[#0fa3b1]" : "border-gray-300"
          } hover:border-[#0fa3b1]`}
        >
          <input
            type="radio"
            name="radioGroup"
            value={option.value}
            checked={selected === option.value}
            onChange={() => setSelected(option.value)}
            className="form-radio h-5 w-5 text-[#0fa3b1]"
          />
          <span className="ml-3 text-gray-700">{option.label}</span>
        </label>
      ))}

      <div className="mb-6" />

      <div className="flex justify-between w-full">
        <button
          onClick={handlePrev}
          className="bg-[#0fa3b1] text-white text-[18px] px-6 py-2 rounded shadow-xl origin-bottom-left transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          ◀
        </button>
        <button
          disabled={selected == ""}
          onClick={handleNext}
          className={`text-[18px] px-6 py-2 rounded shadow-xl ${
            selected !== ""
              ? "bg-[#0fa3b1] text-white origin-bottom-right transition-transform duration-200 hover:scale-105 active:scale-95"
              : "bg-gray-500 text-white cursor-not-allowed"
          }
            `}
        >
          ▶
        </button>
      </div>
    </>
  );
}
