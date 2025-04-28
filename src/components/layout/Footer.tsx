
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-mino-charcoal text-white py-12">
      <div className="mino-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img 
              src="https://cdn.poehali.dev/files/8ef4285b-bc4d-42e0-b63a-159de1b97b2f.jpg" 
              alt="MINO café" 
              className="h-12 mb-4 invert"
            />
            <p className="text-mino-beige/70 max-w-md mb-6">
              Место, где каждая деталь создана для того, чтобы вы могли насладиться 
              моментом спокойствия с чашкой превосходного кофе и авторской выпечкой
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mino-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mino-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mino-green transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-mino-beige/70 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <a href="#menu" className="text-mino-beige/70 hover:text-white transition-colors">
                  Меню
                </a>
              </li>
              <li>
                <a href="#about" className="text-mino-beige/70 hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#contact" className="text-mino-beige/70 hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-mino-beige/70">
                ул. Тверская, 12<br />
                Москва, 125009
              </li>
              <li>
                <a href="tel:+74951234567" className="text-mino-beige/70 hover:text-white transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li>
                <a href="mailto:hello@minocafe.ru" className="text-mino-beige/70 hover:text-white transition-colors">
                  hello@minocafe.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-mino-beige/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} MINO café. Все права защищены.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-mino-beige/50 hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-mino-beige/50 hover:text-white transition-colors">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
