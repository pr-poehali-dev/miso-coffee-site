import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: "coffee" | "tea" | "dessert";
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Матча Латте",
    description: "Традиционный японский напиток с церемониальной матча и молоком",
    price: "390 ₽",
    image: "https://images.unsplash.com/photo-1582785513059-56d7381663d1?auto=format&fit=crop&q=80",
    category: "tea"
  },
  {
    id: 2,
    name: "Эспрессо",
    description: "Насыщенный, концентрированный кофе с ярким вкусом и плотной кремой",
    price: "180 ₽",
    image: "https://images.unsplash.com/photo-1596952953998-ac9c8613dc2d?auto=format&fit=crop&q=80",
    category: "coffee"
  },
  {
    id: 3,
    name: "Дораяки",
    description: "Японские блинчики с начинкой из пасты адзуки",
    price: "320 ₽",
    image: "https://images.unsplash.com/photo-1533622597131-fbbb98a9f2a0?auto=format&fit=crop&q=80",
    category: "dessert"
  }
];

const Menu = () => {
  return (
    <section className="py-20 bg-mino-beige/50">
      <div className="mino-container">
        <div className="text-center mb-12">
          <h2 className="mino-heading text-3xl md:text-4xl font-bold mb-4">Наше меню</h2>
          <p className="text-mino-charcoal/80 max-w-xl mx-auto">
            Откройте для себя нашу коллекцию тщательно подобранных кофейных напитков
            и аутентичных японских десертов
          </p>
          <div className="w-24 h-1 bg-mino-green mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm transform transition-all hover:shadow-md"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-serif text-xl font-bold">{item.name}</h3>
                  <span className="text-mino-green font-medium">{item.price}</span>
                </div>
                <p className="text-mino-charcoal/70 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-mino-green hover:bg-mino-darkGreen">
            <Link to="/menu">Полное меню</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
