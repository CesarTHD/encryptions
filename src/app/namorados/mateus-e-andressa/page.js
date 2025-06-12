"use client";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import foto1 from '@/casal/mateus-e-andressa/foto1.jpg';
import foto2 from '@/casal/mateus-e-andressa/foto2.jpg';
import foto3 from '@/casal/mateus-e-andressa/foto3.jpg';
import foto4 from '@/casal/mateus-e-andressa/foto4.jpg';
import foto5 from '@/casal/mateus-e-andressa/foto5.jpg';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-rose-100 flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-2xl font-bold text-rose-700 my-4 font-cursive">💖 Mateus & Andressa 💖</h1>

        <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg my-6 ">
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
          Feliz dia dos namorados meu amor, são 12 anos ao seu lado,
          e aqui quero expressar um pouco do meu sentimento há a mulher
          mais linda e companheira que já conheci em toda a minha vida.
        </p>

        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Diante de tudo só tenho a agradecer a Deus 
          por tudo que já fez e faz por nós e nossa família, e saiba que nós a amamos muito.
        </p>

        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Te amo 💖
        </p>

        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4 mt-4">
          Com todo meu carinho,
        </p>

        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4 mb-4">
          Mateus Feitosa 💌
        </p>
      </main>
    </>
  );
}
