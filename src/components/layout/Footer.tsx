import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-mino-charcoal text-white">
      <div className="mino-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-bold tracking-wider">MINO</span>
            </Link>
            <p className="text-white/70 mb-4">
              Кофейня с японской эстетикой и безупречным кофе
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-mino-green transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-mino-green transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-mino-green transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-mino-green transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-white/70 hover:text-mino-green transition-colors">
                  Меню
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-mino-green transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-mino-green transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Часы работы</h3>
            <ul className="space-y-2 text-white/70">
              <li className="flex justify-between">
                <span>Понедельник - Пятница</span>
                <span>8:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Суббота - Воскресенье</span>
                <span>9:00 - 22:00</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Контакты</h3>
            <address className="not-italic text-white/70 space-y-2">
              <p>ул. Пушкина, 10</p>
              <p>Москва, 123456</p>
              <p>+7 (123) 456-7890</p>
              <p>info@mino-coffee.ru</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} MINO Coffee. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
