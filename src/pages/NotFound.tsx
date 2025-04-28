import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-mino-beige flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="mino-heading text-8xl font-bold mb-6">404</h1>
          <h2 className="mino-heading text-2xl font-semibold mb-4">Страница не найдена</h2>
          <p className="text-mino-charcoal/80 mb-8 max-w-md mx-auto">
            Похоже, что страница, которую вы ищете, не существует или была перемещена.
          </p>
          <Button asChild className="bg-mino-green hover:bg-mino-darkGreen">
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
