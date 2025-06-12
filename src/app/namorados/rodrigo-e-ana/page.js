"use client";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import foto1 from '@/casal/rodrigo-e-ana/foto1.jpg';
import foto2 from '@/casal/rodrigo-e-ana/foto2.jpg';
import foto3 from '@/casal/rodrigo-e-ana/foto3.jpg';
import foto4 from '@/casal/rodrigo-e-ana/foto4.jpg';
import foto5 from '@/casal/rodrigo-e-ana/foto5.jpg';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-rose-100 flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-2xl font-bold text-rose-700 my-4 font-cursive">💖Rodrigo & Ana Luiza💖</h1>

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
          Feliz Dia dos Namorados, amor!
        </p>

        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Quero te agradecer por tudo o que você é e por tudo o que faz por mim. Obrigado por sempre estar ao meu lado, por me apoiar mesmo quando as coisas ficam difíceis, por acreditar em mim mesmo quando eu duvido. Seu amor me dá força, me acalma e me faz ser uma pessoa melhor.
          Sou imensamente grato por ter você na minha vida, e todos os momentos que passamos juntos me faz acreditar que tem um proposito maior. Que a gente continue construindo nossa história, e que Deus nos abençoe!
        </p>
        
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Feliz por ter você, feliz por passarmos mais essa data juntos!
        </p>

        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Amo você 💖
        </p>

        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4 mt-2 mb-4">
          Com todo meu carinho,
          Rodrigo 💌
        </p>
      </main>
    </>
  );
}
