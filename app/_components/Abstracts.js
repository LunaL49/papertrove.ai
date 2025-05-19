import { useState, useEffect } from "react";

export default function Abstracts({ handleNext, handlePrev, handleChange }) {
  const [text, setText] = useState("");
  const [existingUser, setExistingUser] = useState(false);

  const handleToggle = () => setExistingUser(!existingUser);

  useEffect(() => {
    handleChange("abstracts", text);
  }, [text, handleChange]);

  return (
    <>
      <div>
        <h2 className="text-xl font-bold text-gray-700">
          Last thing, paste the titles and abstracts of the research papers
          indicative of your interests.
        </h2>
        <p className="text-sm font-normal mb-4 text-gray-500">
          The ML algorithm will use this information to tailor its
          recommendation to you. At least 5 papers is recommended, 10 is
          optimal. Please follow the indicated formatting. The ▶ arrow will be
          greyed out until at least 2000 characters have been entered.
        </p>
      </div>

      <div>
        <textarea
          placeholder={`>First paper title
First paper abstract on new line
>Second paper title
Second paper abstract on new line
...`}
          maxLength={20000}
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          className="w-full px-4 py-3 mb-2 rounded-lg shadow-xl border-2 border-gray-300 focus:outline-none focus:border-[#0fa3b1] transition-all duration-300 ease-in-out"
        />
      </div>

      <div>
        <label className="flex items-center gap-2 mb-1 text-gray-700 text-sm">
          <input
            type="checkbox"
            checked={existingUser}
            onChange={() => handleToggle()}
          />
          Leave blank if: I am updating my preferences as an existing user, keep
          this the same as before. (Do not check this box if you are a new
          user!)
        </label>
      </div>

      <div className="mb-4" />

      <div className="flex justify-between w-full">
        <button
          onClick={handlePrev}
          className="bg-[#0fa3b1] text-white text-[18px] px-6 py-2 rounded shadow-xl origin-bottom-left transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          ◀
        </button>
        <button
          disabled={text.length < 2000 && existingUser === false}
          onClick={handleNext}
          className={`text-[18px] px-6 py-2 rounded shadow-xl ${
            text.length >= 2000 || existingUser === true
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
