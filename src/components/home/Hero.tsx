import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-mino-beige">
      <div className="mino-container grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 animate-fade-in">
          <h1 className="mino-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Откройте для себя <br />
            <span className="text-mino-green">совершенство кофе</span>
          </h1>
          <p className="text-mino-charcoal/80 text-lg mb-8 max-w-md">
            Уникальное пространство, где японская эстетика встречается с богатым ароматом свежеобжаренного кофе.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-mino-green hover:bg-mino-darkGreen text-white">
              <Link to="/menu">Наше меню</Link>
            </Button>
            <Button asChild variant="outline" className="border-mino-green text-mino-green hover:bg-mino-green/10">
              <Link to="/about">О нас</Link>
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{animationDelay: "0.2s"}}>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-mino-darkBeige -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1607347235977-de428766c413?auto=format&fit=crop&q=80"
              alt="MINO Coffee"
              className="rounded-lg shadow-lg w-full max-w-md h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-mino-green/20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
