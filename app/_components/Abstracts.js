import { useState, useEffect } from "react";
import { supabase } from "../_lib/supabase";

export default function Abstracts({
  handleNext,
  handlePrev,
  handleChange,
  formData,
}) {
  const [text, setText] = useState("");
  const [existingUser, setExistingUser] = useState(false);
  const [userCheck, setUserCheck] = useState(false);
  const [isInputValid, setIsInputValid] = useState(false);

  const handleToggle = () => setExistingUser(!existingUser);

  useEffect(() => {
    handleChange("abstracts", text);
  }, [text, handleChange]);

  useEffect(() => {
    if (!formData?.email) return; // Avoid running if email is not available

    const checkUser = async () => {
      const { data } = await supabase
        .from("users")
        .select()
        .eq("email", formData.email);

      setUserCheck(data.length > 0);
    };

    checkUser();
  }, [formData?.email]);

  return (
    <>
      <div>
        <h2 className="text-xl font-bold mb-1 text-gray-700">
          Last thing, paste the titles and abstracts of the research papers
          indicative of your interests.
        </h2>
        <p className="text-sm font-normal mb-1 text-gray-500">
          The ML algorithm will use this information to tailor its
          recommendation to you. Enter at least 5 papers, 10 optimal, input
          capped at 20000 characters.
        </p>
        <p className="text-sm font-normal mb-3 text-gray-500">
          Formatting (strictly required): titles on new line beginning with
          &quot;&gt;&quot;, abstracts on new line. The ▶ arrow will be greyed
          out until at least 2000 characters have been entered. You might want
          to keep a copy of this text on your computer in case you want to
          change it later!
        </p>
      </div>

      <div>
        <textarea
          placeholder={`>First paper title
First paper abstract on new line
>Second paper title
Second paper abstract on new line
>Third paper title
...`}
          maxLength={20000}
          value={text}
          onChange={(e) => {
            setText(e.target.value),
              setIsInputValid(isValidInput(e.target.value));
          }}
          rows={6}
          className="w-full px-4 py-3 rounded-lg shadow-xl border-2 border-gray-300 focus:outline-none focus:border-[#0fa3b1] transition-all duration-300 ease-in-out"
        />
      </div>

      {text.length < 2000 && (
        <span className="text-sm text-gray-500">
          You have not yet entered 2000 characters.{" "}
        </span>
      )}

      {!isInputValid && (
        <span className="text-sm text-gray-500">
          Make sure you follow the exact format required.
        </span>
      )}

      <div className="mb-1" />

      {userCheck && (
        <div>
          <label className="flex items-center gap-2 mb-1 text-gray-700 text-sm">
            <input
              type="checkbox"
              checked={existingUser}
              onChange={() => handleToggle()}
            />
            Leave blank if: I am updating my preferences as an existing user,
            keep this the same as before.
          </label>
        </div>
      )}

      <div className="mb-4" />

      <div className="flex justify-between w-full">
        <button
          onClick={handlePrev}
          className="bg-[#0fa3b1] text-white text-[18px] px-6 py-2 rounded shadow-xl origin-bottom-left transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          ◀
        </button>
        <button
          disabled={
            (!isInputValid || text.length < 2000) && existingUser === false
          }
          onClick={handleNext}
          className={`text-[18px] px-6 py-2 rounded shadow-xl ${
            (isInputValid && text.length > 2000) || existingUser === true
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

function isValidInput(input) {
  const lines = input
    .trim()
    .split("\n")
    .map((line) => line.trim());

  // Check first line
  if (!lines[0].startsWith(">")) return false;

  // Find all indices of lines that start with '>'
  const quoteIndices = lines
    .map((line, i) => (line.startsWith(">") ? i : -1))
    .filter((i) => i !== -1);

  // Must be at least two quote lines
  if (quoteIndices.length < 2) return false;

  // Check that all quoted lines are at least one line apart
  for (let i = 1; i < quoteIndices.length; i++) {
    if (quoteIndices[i] - quoteIndices[i - 1] < 2) return false;
  }

  return true;
}
