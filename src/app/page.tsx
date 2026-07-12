import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import WhyGuido from "@/components/sections/WhyGuido";
import FeaturedGuides from "@/components/sections/FeaturedGuides";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhyGuido />
        <FeaturedGuides />
      </main>
      <Footer />
    </>
  );
}
