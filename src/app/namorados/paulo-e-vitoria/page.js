"use client";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import foto1 from '@/casal/paulo-e-vitoria/foto1.jpg';
import foto2 from '@/casal/paulo-e-vitoria/foto2.jpg';
import foto3 from '@/casal/paulo-e-vitoria/foto3.jpg';
import foto4 from '@/casal/paulo-e-vitoria/foto4.jpg';
import foto5 from '@/casal/paulo-e-vitoria/foto5.jpg';
import foto6 from '@/casal/paulo-e-vitoria/foto6.jpg';
import foto7 from '@/casal/paulo-e-vitoria/foto7.jpg';
import foto8 from '@/casal/paulo-e-vitoria/foto8.jpg';
import foto9 from '@/casal/paulo-e-vitoria/foto9.jpg';
import foto10 from '@/casal/paulo-e-vitoria/foto10.jpg';
import foto11 from '@/casal/paulo-e-vitoria/foto11.jpg';
import foto12 from '@/casal/paulo-e-vitoria/foto12.jpg';
import foto13 from '@/casal/paulo-e-vitoria/foto13.jpg';
import foto14 from '@/casal/paulo-e-vitoria/foto14.jpg';
import foto15 from '@/casal/paulo-e-vitoria/foto15.jpg';
import foto16 from '@/casal/paulo-e-vitoria/foto16.jpg';
import foto17 from '@/casal/paulo-e-vitoria/foto17.jpg';
import foto18 from '@/casal/paulo-e-vitoria/foto18.jpg';
import foto19 from '@/casal/paulo-e-vitoria/foto19.jpg';
import foto20 from '@/casal/paulo-e-vitoria/foto20.jpg';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-rose-100 flex flex-col items-center justify-center p-4 text-center">
        <audio autoPlay loop controls>
          <source src='/entregadordeflor.mp3' type="audio/mpeg" />
        </audio>
        <h1 className="text-2xl font-bold text-rose-700 my-4 font-cursive">💖 Paulo Antônio & Vitória 💖</h1>

        <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg my-6">
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            swipeable={false}
            showStatus={false}
            stopOnHover={false}>
              {[foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto8, foto9, foto10, foto11, foto12, foto13, foto14, foto15, foto16, foto17, foto18, foto19, foto20,].map((foto, i) => (
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
          {'"'}O amor é paciente, bondoso, não inveja, não se vangloria, não se orgulha, não maltrata, não busca seus interesses, não se irrita facilmente, não guarada rancor, não se alegra com a injustiça, mas se alegra com a verdade.
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          O amor tudo sofre, tudo crê, tudo espera, tudo suporta.{'"'}
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          1 Coríntios 13:4-7 ✨
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Te Amo 💖💖💖
        </p>

        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4 mt-2 mb-4">
          Com todo meu carinho,
          Paulo Antônio 💌
        </p>
      </main>
    </>
  );
}
