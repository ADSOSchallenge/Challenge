import { useEffect } from "react";
import hospital from "../../assets/hospital.png"

export default function Home(){
    useEffect(()=>{
        document.title = "Home";
    },[]);
    
    return(
        <main className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
                <section className="flex-1 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-800 font-roboto">
                        Bem-vindo ao ADSOS!
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Nosso projeto tem como objetivo facilitar o acesso à saúde digital, para pessoas com dificuldades no uso de tecnologias móveis, promovendo inclusão e autonomia.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        A solução oferece suporte para o uso de aplicativos de saúde, pois aqui você aprende a abrir e acessar o aplicativo do Hospital das Clínicas de forma rápida e fácil. Nosso objetivo é ajudar quem tem dificuldade com tecnologias digitais, garantindo um acesso tranquilo aos serviços de saúde online.
                    </p>
                </section>
                
                <div className="flex-1 flex justify-center">
                    <img 
                        src={hospital} 
                        alt="Foto do hospital das clinicas"
                        className="rounded-lg shadow-2xl max-w-full h-auto transform hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
        </main>
    );
}