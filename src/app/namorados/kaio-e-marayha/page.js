"use client";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import foto1 from '@/casal/kaio-e-marayha/foto1.png';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-rose-100 flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-2xl font-bold text-rose-700 my-4 font-cursive">💖 Kaio & Marayha 💖</h1>

        <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg my-6">
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            <div><Image src={foto1} alt="foto 1" layout="responsive" /></div>
          </Carousel>
        </div>

        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Desde o dia 15 de outubro, minha vida ganhou um brilho diferente: o brilho do seu sorriso, do seu carinho e da paz que só você sabe me dar. Não parece que faz tanto tempo, mas em cada momento ao seu lado, eu sinto que encontrei algo raro: alguém que me entende, me apoia e me faz querer ser melhor a cada dia.
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Amanhã é o nosso primeiro Dia dos Namorados juntos, e eu só quero te agradecer por estar comigo, por ser essa mulher incrível que transforma qualquer dia comum em algo especial. Que esse seja o primeiro de muitos, sempre com amor, respeito e cumplicidade.
        </p>

        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4 mt-2">  
          Te amo, Marayha. 💖
        </p>

        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4 mt-2 mb-4">
          Com todo meu carinho,
          Kaio Victor 💌
        </p>
      </main>
    </>
  );
}
