import Navbar from "@/components/Global/navbar";
import About from "@/components/Home/about";
import Contact from "@/components/Home/contact";
import Hero from "@/components/Home/hero";
import Image from "next/image";
import Services from "@/components/Home/services";
import Footer from "@/components/Global/footer";

export default function Home() {
  return (
    <main className="gradient">
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Contact />
    <Footer />
    </main>
  );
}
