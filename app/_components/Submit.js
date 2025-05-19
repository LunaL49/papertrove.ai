import { useState } from "react";

export default function Submit({
  handleNext,
  handlePrev,
  handleSubmit,
  submit,
}) {
  const [confirm, setConfirm] = useState(false);

  const handleToggle = () => setConfirm(!confirm);
  return (
    <>
      <div>
        <h2 className="text-xl font-bold text-gray-700 mb-8">
          This is it, just one tid bit of logistics...
        </h2>
      </div>
      <div>
        <p className="text-md mb-4 font-normal text-gray-500">
          If you would like to update any of your preferences in the future,
          simply fill out this form again using the same email address you used
          just now. Doing so will overwrite your old preferences with the new
          ones.
        </p>
      </div>

      <div>
        <label className="flex items-center gap-2 text-gray-700 text-sm">
          <input
            type="checkbox"
            checked={confirm}
            onChange={() => handleToggle()}
          />
          Got it, I am ready to receive my personalised research digests.
        </label>
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
          onClick={handleSubmit}
          disabled={!confirm}
          className={`text-[18px] px-6 py-2 rounded shadow-xl ${
            confirm
              ? "bg-[#0fa3b1] text-white origin-bottom-right transition-transform duration-200 hover:scale-105 active:scale-95"
              : "bg-gray-500 text-white cursor-not-allowed"
          }
            `}
        >
          Submit!
        </button>
      </div>
    </>
  );
}
