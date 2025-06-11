"use client";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Head from 'next/head';
import Image from 'next/image';
import foto1 from '../../../public/casal/cesar-e-carol/foto1.jpg';
import foto2 from '../../../public/casal/cesar-e-carol/foto2.jpg';
import foto3 from '../../../public/casal/cesar-e-carol/foto3.jpg';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-rose-100 flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-4xl font-bold text-rose-700 my-4 font-cursive">💖 César & Carolline 💖</h1>

        <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg my-6">
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            <div><Image src={foto1} alt="foto 1" layout="responsive" /></div>
            <div><Image src={foto2} alt="foto 2" layout="responsive" /></div>
            <div><Image src={foto3} alt="foto 3" layout="responsive" /></div>
          </Carousel>
        </div>

        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed px-4">
          Desde o primeiro olhar, meu mundo ganhou cor. <br />
          Cada sorriso seu ilumina meus dias, e cada abraço é meu lar. <br />
          Obrigado por ser meu amor, meu apoio e minha melhor amiga. <br /><br />
          Com todo meu amor, <br />
          César Tallys 💘
        </p>
      </main>
    </>
  );
}
