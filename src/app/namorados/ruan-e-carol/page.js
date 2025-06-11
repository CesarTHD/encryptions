"use client";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import foto1 from '@/casal/ruan-e-carol/foto1.jpg';
import foto2 from '@/casal/ruan-e-carol/foto2.jpg';
import foto3 from '@/casal/ruan-e-carol/foto3.jpg';
import foto4 from '@/casal/ruan-e-carol/foto4.jpg';
import foto5 from '@/casal/ruan-e-carol/foto5.jpg';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-rose-100 flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-2xl font-bold text-rose-700 my-4 font-cursive">💖 Ruan & Carol 💖</h1>

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
          Você é a resposta das minhas orações mais linda! Sonhei e o senhor me presenteou com muito além. 
          Obrigada, por ser o pai maravilhoso que você é. 
          Obrigada por seus sacrifícios, por seu apoio constante e por seu amor sem fim. 
          Nosso filho é abençoado por ter você na vida dele, 
          e eu sou abençoada por ter você como parceiro nesta incrível jornada de criar nosso Anthony, 
          obrigada por ser abrigo, aconchego, sempre trazendo leveza e alegria. 
          Por ser meu grande amigo é impulsionador. 
          Sempre me faltarão palavras para expressar todo o sentimento que sinto sobre você e sobre nós. 
          Eu te amo vida! Sei que passaremos uma vida inteira lado a lado vivendo o melhor de Cristo. 💖
        </p>

        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4 mt-2 mb-4">
          Com todo meu carinho,
          Carol 💌
        </p>
      </main>
    </>
  );
}
