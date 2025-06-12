"use client";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import foto1 from '@/casal/luiz-e-ana/foto1.jpg';
import foto2 from '@/casal/luiz-e-ana/foto2.jpg';
import foto3 from '@/casal/luiz-e-ana/foto3.jpg';
import foto4 from '@/casal/luiz-e-ana/foto4.jpg';
import foto5 from '@/casal/luiz-e-ana/foto5.jpg';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-rose-100 flex flex-col items-center justify-center p-4 text-center">
        <audio autoPlay loop controls>
          <source src='/milanos.mp3' type="audio/mpeg" />
        </audio>
        <h1 className="text-xl font-bold text-rose-700 my-4 font-cursive">💖 Luiz Arthur & Ana Rosa 💖</h1>

        <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg my-6">
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            swipeable={false}
            showStatus={false}
            stopOnHover={false}>
            {[foto1, foto2, foto3, foto4, foto5].map((foto, i) => (
              <div key={i} className="relative w-full h-[500px]">
                <Image
                  src={foto}
                  alt={`foto ${i + 1}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="100%"
                />
              </div>
            ))}
          </Carousel>
        </div>

        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          “Pra você, Ana Rosa…”
        </p>

        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Entre tantas fotos, há muito mais do que sorrisos.
        </p>

        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Há lembranças, histórias e momentos que contam a nossa caminhada até aqui.
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Cada imagem é uma prova de que o amor é leve, simples e bonito… quando é com a pessoa certa.
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          E com você, tudo tem mais cor, mais sentido, mais vida.
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Te conhecer foi sorte.
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Te amar é destino.
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          E te ter é o maior presente que a vida me deu.
        </p>



        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          💖 Feliz dia dos Namorados 💖
        </p>

        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4 mt-2 mb-4">
          Com todo meu carinho,
          Luiz Arthur 💌
        </p>
      </main>
    </>
  );
}
