import { useState, useEffect } from "react";

export default function Journals({ handleNext, handlePrev, handleChange }) {
  const [checkedJournals, setCheckedJournals] = useState({
    cns: false,
    general: false,
    med: false,
    imm: false,
    neuro: false,
    molbio: false,
    comp: false,
    dev: false,
    eng: false,
    chem: false,
    phys: false,
    method: false,
    env: false,
    micro: false,
    other: false,
  });

  const isAnyChecked = Object.values(checkedJournals).some((val) => val);

  const handleCheck = (key) => {
    setCheckedJournals((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    const selectedJournals = Object.entries(checkedJournals)
      .filter(([_, value]) => value)
      .map(([key]) => key)
      .join(" ");

    handleChange("journals", selectedJournals);
  }, [checkedJournals, handleChange]);

  return (
    <>
      <div>
        <h2 className="text-xl font-bold text-gray-700">
          Which journals would you like to subscribe to?
        </h2>
        <p className="text-sm font-normal mb-4 text-gray-500">
          This part tells the algorithm where should it look when finding you
          interesting research. Feel free to check everything, you will choose
          how long each digest should be in a bit.
        </p>
      </div>

      <div className="overflow-y-auto max-h-48">
        <div>
          <label className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              checked={checkedJournals.cns}
              onChange={() => handleCheck("cns")}
            />
            Nature, Science, Cell
          </label>
        </div>

        <div>
          <label className="flex gap-2 mb-2">
            <input
              type="checkbox"
              checked={checkedJournals.general}
              onChange={() => handleCheck("general")}
            />
            Other general journals: Science Advances, Nature Communications,
            PNAS, etc.
          </label>
        </div>

        <div>
          <label className="flex gap-2 mb-2">
            <input
              type="checkbox"
              checked={checkedJournals.med}
              onChange={() => handleCheck("med")}
            />
            Medical & Translational biomedical science: Nature Medicine, Nature
            Biotechnology, etc.
          </label>
        </div>

        <div>
          <label className="flex gap-2 mb-2">
            <input
              type="checkbox"
              checked={checkedJournals.imm}
              onChange={() => handleCheck("imm")}
            />
            Immunology & Cancer: Science Immunology, Cancer Cell, etc.
          </label>
        </div>

        <div>
          <label className="flex gap-2 mb-2">
            <input
              type="checkbox"
              checked={checkedJournals.neuro}
              onChange={() => handleCheck("neuro")}
            />
            Neuroscience & Behaviour: Nature Neuroscience, Neuron, Brain, etc.
          </label>
        </div>

        <div>
          <label className="flex gap-2 mb-2">
            <input
              type="checkbox"
              checked={checkedJournals.molbio}
              onChange={() => handleCheck("molbio")}
            />
            Molecular biology & Genetics: Nature Cell Biology, Molecular Cell,
            Science Signalling, etc.
          </label>
        </div>

        <div>
          <label className="flex gap-2 mb-2">
            <input
              type="checkbox"
              checked={checkedJournals.comp}
              onChange={() => handleCheck("comp")}
            />
            Computation & Computational Biology: Nature Machine Intelligence,
            Bioinformatics, Cell Systems, etc.
          </label>
        </div>

        <div>
          <label className="flex gap-2 mb-2">
            <input
              type="checkbox"
              checked={checkedJournals.dev}
              onChange={() => handleCheck("dev")}
            />
            Development & Aging: Nature Aging, Cell Stem Cell, etc.
          </label>
        </div>

        <div>
          <label className="flex gap-2 mb-2">
            <input
              type="checkbox"
              checked={checkedJournals.eng}
              onChange={() => handleCheck("eng")}
            />
            BioE, ChemE, Nanotechnology: Nature Biomedical Engineering, etc.
          </label>
        </div>

        <div>
          <label className="flex gap-2 mb-2">
            <input
              type="checkbox"
              checked={checkedJournals.chem}
              onChange={() => handleCheck("chem")}
            />
            Chemical science: Nature Catalysis, etc.
          </label>
        </div>

        <div>
          <label className="flex gap-2 mb-2">
            <input
              type="checkbox"
              checked={checkedJournals.phys}
              onChange={() => handleCheck("phys")}
            />
            Physical science: Science Robotics, Nature Materials, etc.
          </label>
        </div>

        <div>
          <label className="flex gap-2 mb-2">
            <input
              type="checkbox"
              checked={checkedJournals.method}
              onChange={() => handleCheck("method")}
            />
            Methods: Nature Methods, STAR protocols, etc.
          </label>
        </div>

        <div>
          <label className="flex gap-2 mb-2">
            <input
              type="checkbox"
              checked={checkedJournals.env}
              onChange={() => handleCheck("env")}
            />
            Environmental & Plant sciences: Nature Ecology & Evolution, Nature
            Geoscience, etc.
          </label>
        </div>

        <div>
          <label className="flex gap-2 mb-2">
            <input
              type="checkbox"
              checked={checkedJournals.micro}
              onChange={() => handleCheck("micro")}
            />
            Microbiology: Nature Microbiology, etc.
          </label>
        </div>

        <div>
          <label className="flex gap-2 mb-2">
            <input
              type="checkbox"
              checked={checkedJournals.other}
              onChange={() => handleCheck("other")}
            />
            All other journals within the scope of the algorithm
          </label>
        </div>
      </div>

      <div className="mb-6" />

      <div className="flex justify-between w-full">
        <button
          onClick={handlePrev}
          className="bg-[#0fa3b1] text-white text-[18px] px-6 py-2 rounded shadow-xl origin-bottom-left transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          ◀
        </button>
        <button
          disabled={!isAnyChecked}
          onClick={handleNext}
          className={`text-[18px] px-6 py-2 rounded shadow-xl ${
            isAnyChecked
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
