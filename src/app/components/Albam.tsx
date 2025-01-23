
"use client";
import { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/24/solid";

export default function Albam() {
  const [text, setText] = useState("");
  const [textEncrypt, setTextEncrypt] = useState("");

  const encrypt = () => {
    const arrayLetters: Array<string> = text.split("");
    let msgEncrypt = [];

    let i = 0;
    while (i < arrayLetters.length) {
      let numLetter = arrayLetters[i].charCodeAt(0);
      if(numLetter >= 97 && numLetter <= 122) {
        if (numLetter <= 109) {
          msgEncrypt.push(
            String.fromCharCode(numLetter + 13)
          );
        } else {
          msgEncrypt.push(
            String.fromCharCode((13 - (122 - numLetter)) + 96)
          );
        }
      } else { 
        msgEncrypt.push(arrayLetters[i]);
      }
      i++;
    }

    const join = msgEncrypt.join("").replace(",", "");

    setTextEncrypt(join);
  };


  return (
    <div className="max-w-[800px] mx-auto border py-8">
      <h2 className="text-3xl font-semibold">Albam</h2>
      <form className="flex gap-12 mt-8 justify-center">
        <div className="text-left w-full max-w-[600px]">
          <h3 className="text-lg">Informe o texto que deseja criptografar:</h3>
          <textarea value={text} onChange={(e) => setText(e.target.value)} className="w-full min-h-32 mt-4 border border-black text-black p-1" />

          <div className="flex justify-between">
            <button
              onClick={() => encrypt()}
              type="button"
              className="flex border rounded-md px-2 mt-4 items-center gap-2 py-1"
            >
              <LockClosedIcon className="w-4" /> <span>Criptografar/ Descriptografar</span> <LockOpenIcon className="w-4" />
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
