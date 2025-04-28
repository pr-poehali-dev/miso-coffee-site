import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Menu from "@/components/home/Menu";
import Contact from "@/components/home/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-mino-beige">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
