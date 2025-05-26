"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { supabase } from "../_lib/supabase";

import Form_cover from "./Form_cover";
import Email from "./Email";
import Frequency from "./Frequency";
import Digest_length from "./Digest_length";
import Abstracts from "./Abstracts";
import Submit from "./Submit";

export default function Form() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    frequency: "",
    digest_length: 5,
    abstracts: "",
  });
  const [submit, setSubmit] = useState(false);

  const handleChange = useCallback((field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const handleNext = () => {
    setStep((step) => step + 1);
  };

  const handlePrev = () => {
    setStep((step) => step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("submissions").insert([formData]);

    if (error) {
      console.error("Submission error:", error);
      setSubmit(false);
      router.push("/error");
    } else {
      setSubmit(true);
      setFormData({
        email: "",
        frequency: "",
        digest_length: 5,
        abstracts: "",
      });
      router.push("/thank-you");
    }
  };

  return (
    <div className="flex flex-col relative h-3/4 w-4/5 mx-auto my-auto overflow-y-auto">
      <div className={step === 0 ? "" : "hidden"}>
        <Form_cover handleNext={handleNext} />
      </div>

      <div className={step === 1 ? "" : "hidden"}>
        <Email
          handleNext={handleNext}
          handlePrev={handlePrev}
          formData={formData}
          handleChange={handleChange}
        />
      </div>

      <div className={step === 2 ? "" : "hidden"}>
        <Frequency
          handleNext={handleNext}
          handlePrev={handlePrev}
          handleChange={handleChange}
        />
      </div>

      <div className={step === 3 ? "" : "hidden"}>
        <Digest_length
          handleNext={handleNext}
          handlePrev={handlePrev}
          handleChange={handleChange}
        />
      </div>

      <div className={step === 4 ? "overflow-auto" : "hidden"}>
        <Abstracts
          handleNext={handleNext}
          handlePrev={handlePrev}
          handleChange={handleChange}
          formData={formData}
        />
      </div>

      <div className={step === 5 ? "" : "hidden"}>
        <Submit handlePrev={handlePrev} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
