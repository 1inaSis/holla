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
              <section className="grid grid-cols-12 bg-sky-300 gap-4 "> 
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
              <section className="grid grid-cols-12 bg-sky-300 gap-4 py-4"> 
                  <div className="col-span-3 bg-red-300 rounded-xl p-7 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 bg-[length:200%_200%] animate-gradient-flow sticky top-0 z-50 shadow-lg">
                    <h1 className="text-xl font-bold text-center text-left pb-3">Marketing de Contenu</h1>
                    <p className="text-center text-stone-600 text-left text-balance pb-7">Apprenez à élaborer des campagnes de communication percutantes pour promouvoir vos projets Enactus. Découvrez des outils et techniques modernes pour atteindre votre public cible de manière efficace. </p>
                    <Link className="font-md" href="https://www.google.com/search?q=Enactus+Resources&oq=Enactus+Resources&gs_lcrp=EgZjaHJvbWUqEAgAEEUYExgnGDsYgAQYigUyEAgAEEUYExgnGDsYgAQYigUyCggBEAAYExgWGB4yCggCEAAYgAQYogQyCggDEAAYgAQYogQyCggEEAAYgAQYogQyCggFEAAYgAQYogQyCggGEAAYgAQYogTSAQc2NTNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" >Enactus Resources →</Link>
                  </div> 
                  <div className="col-span-6 bg-red-300 ">
                    <h1 className="text-4xl font-bold text-center">ENACTUS FSBM</h1>
                    <p className="text-center">Enactus est un réseau mondial qui inspire les jeunes à utiliser l'entrepreneuriat pour résoudre les défis sociaux et économiques. Enactus Maroc, fondé en 2003, fait partie de ce réseau et offre aux étudiants l'opportunité de concrétiser des projets innovants ayant un impact direct sur leur communauté. </p>
                  </div> 
                  <div className="col-span-3 bg-red-300 ">
                    <h1 className="text-4xl font-bold text-center">ENACTUS FSBM</h1>
                    <p className="text-center">roc, fondé en 2003, fait partie de ce réseau et offre aux étudiants l'opportunité de concrétiser des projets innovants ayant un impact direct sur leur communauté. </p>
                  </div>   
              </section>
            </main>
            {/* <Footer /> */}
            
        </div>
      
    )
  }
  