"use client";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import foto1 from '@/casal/guilherme-e-amanda/foto1.jpg';
import foto2 from '@/casal/guilherme-e-amanda/foto2.jpg';
import foto3 from '@/casal/guilherme-e-amanda/foto3.jpg';
import foto4 from '@/casal/guilherme-e-amanda/foto4.jpg';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-rose-100 flex flex-col items-center justify-center p-4 text-center">
        <audio autoPlay loop controls>
          <source src='/quesorteanossa.mp3' type="audio/mpeg" />
        </audio>
        <h1 className="text-2xl font-bold text-rose-700 my-4 font-cursive">💖 Guilherme & Amanda 💖</h1>

        <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg my-6">
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            swipeable={false}
            showStatus={false}
            stopOnHover={false}>
              {[foto1, foto2, foto3, foto4].map((foto, i) => (
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
          Minha eterna Namorada, obrigado por ser o motivo dos meus sorrisos diários, onde encontro minha paz em nosso lar.
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Te Amo minha companheira 💖💖💖
        </p>

        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4 mt-2 mb-4">
          Com todo meu carinho,
          Guilherme 💌
        </p>
      </main>
    </>
  );
}
