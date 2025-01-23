
"use client";
import { useState } from "react";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/24/solid";

export default function Cesar() {
  const [criterion, setCriterion] = useState<number>(0);
  const [text, setText] = useState("");
  const [textEncrypt, setTextEncrypt] = useState("");

  const encrypt = (type: string) => {
    const arrayLetters: Array<string> = text.split("");
    const msgEncrypt = [];

    let i = 0;
    while (i < arrayLetters.length) {
      if (arrayLetters[i]) {
        if (type === "encrypt") {
          msgEncrypt.push(
            String.fromCharCode(arrayLetters[i].charCodeAt(0) + criterion)
          );
        } else if (type === "decrypt") {
          msgEncrypt.push(
            String.fromCharCode(arrayLetters[i].charCodeAt(0) - criterion)
          );
        }
      }
      i++;
    }

    const join = msgEncrypt.join("").replace(",", "");

    setTextEncrypt(join);
  };


  return (
    <div className="max-w-[800px] mx-auto border py-8">
      <h2 className="text-3xl font-semibold">Cifra de César</h2>
      <form className="flex flex-col md:flex-row gap-12 mt-8 justify-center">
        <div className="text-left">
          <h3 className="text-lg">Informe o critério da cifra:</h3>
          <div className="flex gap-4 items-end mt-4">
            <div className="flex gap-2 flex-col items-start">
              <input type="number" value={criterion} onChange={(e) => setCriterion(Number(e.target.value))} className="text-black w-16 border border-black px-2" />
            </div>
          </div>
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
        </div>
      </form>
      {textEncrypt && (
        <div className="mt-12 mx-12">
          <h3 className="text-lg font-semibold">Resultado:</h3>
          <p className="border break-words p-2">{textEncrypt}</p>
        </div>
      )}
    </div>
  );
}
