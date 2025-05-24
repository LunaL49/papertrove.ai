import { useState, useEffect } from "react";

export default function Email({
  handleNext,
  handlePrev,
  handleChange,
  formData,
}) {
  const [isEmailValid, setIsEmailValid] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  useEffect(() => {
    setIsEmailValid(validateEmail(formData.email));
  }, [formData.email]);

  return (
    <>
      <div>
        <h2 className="text-xl font-bold text-gray-700 mb-2">
          Your email address? This is where you will receive your research
          digests.
        </h2>
        <p className="text-sm mb-6 font-normal text-gray-500">
          Use a personal email like gmail, work/university emails have very
          stringent filtering policies which are difficult to get around. From
          there, you can choose to set up email forwarding to your work email.
        </p>
      </div>
      <div>
        <input
          type="email"
          placeholder="me@something.com"
          maxLength={50}
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="w-2/3 px-4 py-2 rounded-lg shadow-xl border-b-2 mb-2 border-b-gray-700 focus:outline-none focus:border-b-2 focus:border-b-[#0fa3b1] transition-all duration-300 ease-in-out transform focus:scale-105 origin-top-left"
        />
      </div>

      {!isEmailValid && (
        <div className="text-gray-400 text-sm text-left">
          Make sure you enter a valid email address.
        </div>
      )}

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
          disabled={!isEmailValid}
          className={`text-[18px] px-6 py-2 rounded shadow-xl ${
            isEmailValid
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
