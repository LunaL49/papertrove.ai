"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { supabase } from "../_lib/supabase";

export default function Unsubscribe() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  useEffect(() => {
    setIsEmailValid(validateEmail(email));
  }, [email]);

  const handleEmail = (text) => {
    setEmail(text);
  };

  const handleConfirm = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("unsubscribe").insert({ email });

    if (error) {
      console.error("Submission error:", error);
      router.push("/unsubscribe-error");
    } else {
      router.push("/unsubscribe-success");
    }
  };
  console.log(email);
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full h-4/5 rounded-[4rem] overflow-hidden border my-5 bg-gray-50 border-gray-200 shadow-2xl">
        <div className="flex flex-col w-full items-center justify-center h-full">
          <div className="text-xl font-bold text-gray-700 mb-2 w-2/3">
            We are sorry to see you go! Enter the email address you would like
            to be unsubscribed:
          </div>

          <div className="text-md text-gray-700 w-2/3 mb-2">
            <input
              type="email"
              placeholder="me@something.com"
              maxLength={50}
              value={email}
              onChange={(e) => handleEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg shadow-xl border-b-2 border-b-gray-700 focus:outline-none focus:border-b-2 focus:border-b-[#0fa3b1] transition-all duration-300 ease-in-out transform focus:scale-105 origin-top"
            />
          </div>

          <div className="text-sm text-gray-500 mb-8 w-2/3">
            It may take up to 24hrs for unsubscibing to come into effect.
          </div>

          <button
            onClick={handleConfirm}
            disabled={!isEmailValid}
            className={`text-[18px] px-6 py-2 rounded shadow-xl ${
              isEmailValid
                ? "bg-[#0fa3b1] text-white origin-top transition-transform duration-200 hover:scale-105 active:scale-95"
                : "bg-gray-500 text-white cursor-not-allowed"
            }
            `}
          >
            I confirm I would like to unsubscribe.
          </button>
        </div>
      </div>
    </div>
  );
}
