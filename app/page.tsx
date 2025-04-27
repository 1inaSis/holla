import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
// import Slide from "../components/Slide";
// import Image from "next/image";
import Link from "next/link";



export default function HomePage() {
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main className="py-10 mx-auto max-w-7xl">
              <section className="grid grid-cols-12 gap-4 bg-sky-300 "> 
                  <div className="col-span-3 bg-red-300 rounded-xl">
                    <h1 className="text-4xl font-bold text-center">ENACTUS FSBM</h1>
                    <p className="text-center">Enactus est un réseau mondial qui inspire les jeunes à utiliser l'entrepreneuriat pour résoudre les défis sociaux et économiques. Enactus Maroc, fondé en 2003, fait partie de ce réseau et offre aux étudiants l'opportunité de concrétiser des projets innovants ayant un impact direct sur leur communauté. </p>
                  </div> 
                  <div className="col-span-6 bg-red-300 ">
                    <h1 className="text-4xl font-bold text-center">ENACTUS FSBM</h1>
                    <p className="text-center">Enactus est un réseau mondial qui inspire les jeunes à utiliser l'entrepreneuriat pour résoudre les défis sociaux et économiques. Enactus Maroc, fondé en 2003, fait partie de ce réseau et offre aux étudiants l'opportunité de concrétiser des projets innovants ayant un impact direct sur leur communauté. </p>
                  </div> 
                  <div className="col-span-3 bg-red-300 ">
                    <h1 className="text-4xl font-bold text-center">ENACTUS FSBM</h1>
                    <p className="text-center">Enactus est un réseau mondial qui inspire les jeunes à utiliser l'entrepreneuriat pour résoudre les défis sociaux et économiques. Enactus Maroc, fondé en 2003, fait partie de ce réseau et offre aux étudiants l'opportunité de concrétiser des projets innovants ayant un impact direct sur leur communauté. </p>
                  </div>   
              </section>
              <section className="grid grid-cols-12 gap-4 py-4 bg-sky-300"> 
                  <div className="hover:shadow-lg hover:translate-y-2 transition-all col-span-3 bg-red-300 rounded-xl p-7 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 bg-[length:200%_200%] animate-gradient-flow sticky top-0 z-50 shadow-lg">
                    <h1 className="pb-3 text-xl font-bold text-left ">✔️ Marketing de Contenu</h1>
                    <p className="text-left text-stone-600 text-balance pb-7">Apprenez à élaborer des campagnes de communication percutantes pour promouvoir vos projets Enactus. Découvrez des outils et techniques modernes pour atteindre votre public cible de manière efficace. </p>
                    <Link className="font-md" href="https://www.google.com/search?q=Enactus+Resources&oq=Enactus+Resources&gs_lcrp=EgZjaHJvbWUqEAgAEEUYExgnGDsYgAQYigUyEAgAEEUYExgnGDsYgAQYigUyCggBEAAYExgWGB4yCggCEAAYgAQYogQyCggDEAAYgAQYogQyCggEEAAYgAQYogQyCggFEAAYgAQYogQyCggGEAAYgAQYogTSAQc2NTNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" >Enactus Resources →</Link>
                  </div> 
                  <div className="col-span-6 bg-red-300 ">
                    <h1 className="text-4xl font-bold text-center">ENACTUS FSBM</h1>
                    <p className="text-center">Enactus est un réseau mondial qui inspire les jeunes à utiliser l'entrepreneuriat pour résoudre les défis sociaux et économiques. Enactus Maroc, fondé en 2003, fait partie de ce réseau et offre aux étudiants l'opportunité de concrétiser des projets innovants ayant un impact direct sur leur communauté. </p>
                  </div> 
                  <div className="hover:shadow-lg hover:translate-y-2 transition-all col-span-3 bg-red-300 rounded-xl p-7 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-[length:200%_200%] animate-gradient-flow sticky top-0 z-50 shadow-lg">
                    <h1 className="pb-3 text-xl font-bold text-left ">✔️ Engagement Social</h1>
                    <p className="text-left text-stone-600 text-balance pb-7">Notre mission est de transformer des idées innovantes en solutions concrètes pour répondre aux besoins des communautés. Impliquez-vous dans des projets qui changent des vies.  </p>
                    <Link className="font-md" href="https://www.google.com/search?q=enactus+morocco&oq=enac&gs_lcrp=EgZjaHJvbWUqDggDEEUYJxg7GIAEGIoFMgYIABBFGDwyEAgBEEUYExgnGDsYgAQYigUyBwgCEC4YgAQyDggDEEUYJxg7GIAEGIoFMgYIBBBFGDsyBggFEEUYOzIGCAYQRRg8MgYIBxBFGDzSAQgyOTAwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8" >Enactus Maroc →</Link>
                  </div>   
              </section>
              <section className="grid grid-cols-12 gap-4 py-4 bg-sky-300"> 
                  <div className="hover:shadow-lg hover:translate-y-2 transition-all col-span-3 bg-red-300 rounded-xl p-7 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 bg-[length:200%_200%] animate-gradient-flow sticky top-0 z-50 shadow-lg">
                    <h1 className="pb-3 text-xl font-bold text-left ">✔️ Identité et Image de Marque</h1>
                    <p className="text-left text-stone-600 text-balance pb-7">Donnez une image professionnelle et cohérente à votre équipe Enactus. Développez une identité de marque qui reflète vos valeurs et votre vision.  </p>
                    <Link className="font-md" href="https://www.google.com/search?q=Training+Center+-+Branding&oq=Training+Center+-+Branding&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMgoIAxAAGAoYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB4yCggJEAAYgAQYogTSAQc1MDVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" >Training Center - Branding →</Link>
                  </div> 
                  <div className="col-span-6 bg-red-300 ">
                    <h1 className="text-4xl font-bold text-center">ENACTUS FSBM</h1>
                    <p className="text-center">Enactus est un réseau mondial qui inspire les jeunes à utiliser l'entrepreneuriat pour résoudre les défis sociaux et économiques. Enactus Maroc, fondé en 2003, fait partie de ce réseau et offre aux étudiants l'opportunité de concrétiser des projets innovants ayant un impact direct sur leur communauté. </p>
                  </div> 
                  <div className="hover:shadow-lg hover:translate-y-2 transition-all col-span-3 bg-red-300 rounded-xl p-7 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-[length:200%_200%] animate-gradient-flow sticky top-0 z-50 shadow-lg">
                    <h1 className="pb-3 text-xl font-bold text-left ">✔️ Conception de Produits</h1>
                    <p className="text-left text-stone-600 text-balance pb-7">Transformez vos idées en prototypes viables et développez des solutions innovantes adaptées aux besoins des communautés. Laissez libre cours à votre créativité tout en restant pratique.  </p>
                    <Link className="font-md" href="https://www.google.com/search?q=Enactus+World+Cup&oq=Enactus+World+Cup&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBBzU2M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8" >Enactus World Cup →</Link>
                  </div>   
              </section>
            </main>
            {/* <Footer /> */}
            
        </div>
      
    )
  }
  