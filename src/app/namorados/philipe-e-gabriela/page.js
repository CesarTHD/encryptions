"use client";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import foto1 from '@/casal/philipe-e-gabriela/foto1.jpg';
import foto2 from '@/casal/philipe-e-gabriela/foto2.jpg';
import foto3 from '@/casal/philipe-e-gabriela/foto3.jpg';
import foto4 from '@/casal/philipe-e-gabriela/foto4.jpg';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-rose-100 flex flex-col items-center justify-center p-4 text-center">
        <audio autoPlay loop controls>
          <source src='/andressa.mp3' type="audio/mpeg" />
        </audio>
        <h1 className="text-2xl font-bold text-rose-700 my-4 font-cursive">💖 Philipe & Gabriela 💖</h1>

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
          Gabi,
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Hoje é Dia dos Namorados, mas pra mim, todos os dias ganham um brilho a mais desde que você entrou na minha vida.
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Desde o nosso primeiro olhar até os momentos mais simples que dividimos, eu percebi que amar você é uma das coisas mais bonitas que já vivi. Você me ensina sobre leveza, carinho e força todos os dias, e eu sou grato por cada risada sua, por cada conversa boba e por cada abraço apertado que me faz sentir em casa.
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Não sei como descrever o quanto você é importante pra mim — mas sei que, ao seu lado, eu quero construir sonhos, viver histórias e enfrentar qualquer coisa.
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Que essa data se repita para nós para sempre. Porque eu escolho você. Todos os dias.
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Feliz dia dos Namorados! 💖💖💖
        </p>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4 mt-2 mb-4">
          Com todo o amor do mundo,
          Philipe Santos 💌
        </p>
      </main>
    </>
  );
}
