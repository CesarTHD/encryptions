"use client";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import foto1 from '@/casal/cesar-e-carol/foto1.jpg';
import foto2 from '@/casal/cesar-e-carol/foto2.jpg';
import foto3 from '@/casal/cesar-e-carol/foto3.jpg';
import foto4 from '@/casal/cesar-e-carol/foto4.jpg';
import foto5 from '@/casal/cesar-e-carol/foto5.jpg';
import foto6 from '@/casal/cesar-e-carol/foto6.jpg';
import foto7 from '@/casal/cesar-e-carol/foto7.jpg';
import foto8 from '@/casal/cesar-e-carol/foto8.jpg';
import foto9 from '@/casal/cesar-e-carol/foto9.jpg';
import foto10 from '@/casal/cesar-e-carol/foto10.jpg';
import foto11 from '@/casal/cesar-e-carol/foto11.jpg';
import foto12 from '@/casal/cesar-e-carol/foto12.jpg';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-rose-100 flex flex-col items-center justify-center p-4 text-center">
        <audio autoPlay loop controls>
          <source src='/andressa.mp3' type="audio/mpeg" />
        </audio>
        <h1 className="text-2xl font-bold text-rose-700 my-4 font-cursive">💖 César & Carolline 💖</h1>

        <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg my-6">
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            swipeable={false}
            showStatus={false}
            stopOnHover={false}>
              {[foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11, foto12].map((foto, i) => (
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
          Todas essas fotos me fazem lembrar o quão especial você é pra mim.
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Momentos de cumplicidade, leveza e muito amor.
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Desejo que possamos sempre completar um ao outro com nossas indiferenças, e que possamos sempre encontrar abrigo um no outro.
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Que sempre que um dos dois se revoltar o outro possa, como diz a música, voltar com a paz.
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          A paixão pode ir e vir, mas o amor estará sempre presente. Devemos ter sempre a empatia e a paciência com nós mesmos.
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Nem tudo são flores, mas vamos sempre regar o nosso jardim.
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Te Amo, minha companheira!
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          💖💖💖
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Feliz dia dos namorados
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4 mt-2 mb-4">
          Com muito carinho,
          César Tallys 💌
        </p>
      </main>
    </>
  );
}
