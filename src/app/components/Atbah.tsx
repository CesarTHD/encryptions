
"use client";
import { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/24/solid";

export default function Atbah() {
  const [criterion, setCriterion] = useState<number[]>([0]);
  const [text, setText] = useState("");
  const [textEncrypt, setTextEncrypt] = useState("");

  const handleDelete = (index: number) => {
    const newCriterion = criterion.filter((value, i) => i !== index);
    setCriterion(newCriterion);
  };

  const handleChange = (value: string, index: number) => {
    const updatedCriterion = [...criterion];
    updatedCriterion[index] = Number(value);
    setCriterion(updatedCriterion);
  };

  const encrypt = (type: string) => {
    if (criterion.length > 0) {
      const arrayLetters: Array<string> = text.split("");
      let msgEncrypt = [];
      const numCriteria = criterion.length;

      let i = 0;

      while (i < arrayLetters.length) {
        for (let j = 0; j < numCriteria; j++) {
          if (arrayLetters[i + j]) {
            if (type === "encrypt") {
              msgEncrypt.push(
                String.fromCharCode(arrayLetters[i + j].charCodeAt(0) + criterion[j])
              );
            } else if (type === "decrypt") {
              msgEncrypt.push(
                String.fromCharCode(arrayLetters[i + j].charCodeAt(0) - criterion[j])
              );
            }
          }
        }
        i += numCriteria;
      }

      const join = msgEncrypt.join("").replace(",", "");

      setTextEncrypt(join);
    }
  };


  return (
    <div className="max-w-[800px] mx-auto border py-8">
      <h2 className="text-3xl font-semibold">Atbah</h2>
      <form className="flex flex-col md:flex-row gap-12 mt-8 justify-center">
        <div className="text-left">
          <h3 className="text-lg">Adicione quantos critérios desejar:</h3>
          {criterion.map((crit, index) => (
            <div key={index} className="flex gap-4 items-end mt-4">
              <div className="flex gap-2 flex-col items-start">
                <label className="">Critério {index + 1}:</label>
                <input type="number" value={crit} onChange={(e) => handleChange(e.target.value, index)} className="text-black w-16 border border-black px-2" />
              </div>
              <button onClick={() => handleDelete(index)} type="button">
                <TrashIcon className="w-5" />
              </button>
            </div>
          ))}

          <button
            onClick={() => setCriterion([...criterion, 0])}
            type="button"
            className="border rounded-md px-2 mt-4 py-1"
          >
            + Critério
          </button>
        </div>

        <div className="text-left w-full max-w-[400px]">
          <h3 className="text-lg">Informe o texto que deseja criptografar:</h3>
          <textarea value={text} onChange={(e) => setText(e.target.value)} className="w-full min-h-32 mt-4 border border-black text-black p-1" />

          <div className="flex justify-between">
            <button
              onClick={() => encrypt("encrypt")}
              type="button"
              className="flex border rounded-md px-2 mt-4 items-center gap-2 py-1"
            >
              <LockClosedIcon className="w-4" /> <span>Criptografar</span>
            </button>
            <button
              onClick={() => encrypt("decrypt")}
              type="button"
              className="flex border rounded-md px-2 mt-4 items-center gap-2 py-1"
            >
              <LockOpenIcon className="w-4" /> <span>Descriptografar</span>
            </button>
          </div>
          {textEncrypt && (
            <div className="mt-12">
              <h3 className="text-lg font-semibold">Resultado:</h3>
              <p className="border break-words p-2">{textEncrypt}</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
