"use client";
import { useState } from "react";
import Albam from "./components/Albam";
import Atbah from "./components/Atbah";
import Cesar from "./components/Cesar";
import Atbash from "./components/Atbash";

export default function Home() {
  const [option, setOption] = useState(0);
  


  return (
    <div className="flex justify-center p-4 sm:p-12">
      <div className="text-center w-full">
        <h1 className="text-4xl font-semibold">Encryptions</h1>
        <h2 className="mt-4 text-2xl">Selecione o método de criptografia desejado:</h2>

        <ul className="mt-8 flex flex-col sm:flex-row gap-2 justify-between max-w-[500px] mx-auto">
          <li>
            <button onClick={() => setOption(0)} className={option === 0 ? "border w-28 p-1 rounded-lg bg-white border-black text-black font-semibold" : "border w-28 p-1 rounded-lg hover:text-black hover:bg-white hover:font-semibold"}>
              <span>Atbash</span>
            </button>
          </li>
          <li>
            <button onClick={() => setOption(1)} className={option === 1 ? "border w-28 p-1 rounded-lg bg-white border-black text-black font-semibold" : "border w-28 p-1 rounded-lg hover:text-black hover:bg-white hover:font-semibold"}>
              <span>Albam</span>
            </button>
          </li>
          <li>
            <button onClick={() => setOption(2)} className={option === 2 ? "border w-28 p-1 rounded-lg bg-white border-black text-black font-semibold" : "border w-28 p-1 rounded-lg hover:text-black hover:bg-white hover:font-semibold"}>
              <span>Atbah</span>
            </button>
          </li>
          <li>
            <button onClick={() => setOption(3)} className={option === 3 ? "border w-28 p-1 rounded-lg bg-white border-black text-black font-semibold" : "border w-28 p-1 rounded-lg hover:text-black hover:bg-white hover:font-semibold"}>
              <span>César</span>
            </button>
          </li>
        </ul>

        <div className="mt-8">
          {option === 0 && (
            <Atbash />
          )}
          {option === 1 && (
            <Albam />
          )}
          {option === 2 && (
            <Atbah />
          )}
          {option === 3 && (
            <Cesar />
          )}
        </div>
      </div>
    </div>
  );
}
