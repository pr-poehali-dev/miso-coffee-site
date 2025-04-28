
const MenuItem = ({ 
  title, 
  description, 
  price 
}: { 
  title: string; 
  description: string; 
  price: string;
}) => (
  <div className="border-b border-mino-darkBeige/40 pb-4 mb-4 last:border-0">
    <div className="flex justify-between items-center mb-2">
      <h3 className="font-serif text-xl text-mino-charcoal">{title}</h3>
      <span className="font-medium text-mino-green">{price}</span>
    </div>
    <p className="text-mino-coffee/80 text-sm">{description}</p>
  </div>
);

const Menu = () => {
  return (
    <section id="menu" className="py-16 md:py-24">
      <div className="mino-container">
        <div className="text-center mb-16">
          <h2 className="mino-heading text-3xl md:text-4xl font-bold mb-4">
            Наше меню
          </h2>
          <p className="text-mino-coffee max-w-2xl mx-auto">
            Мы тщательно отбираем ингредиенты для наших блюд и напитков,
            чтобы каждый ваш визит был наполнен незабываемыми вкусовыми впечатлениями
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-white/60 p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-mino-green flex items-center justify-center mr-4">
                <span className="text-white text-lg">☕</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-mino-charcoal">Кофе</h3>
            </div>
            
            <div className="space-y-6">
              <MenuItem 
                title="Эспрессо" 
                description="Концентрированный кофе с плотной кремовой пенкой"
                price="180 ₽"
              />
              <MenuItem 
                title="Американо" 
                description="Эспрессо с добавлением горячей воды" 
                price="220 ₽"
              />
              <MenuItem 
                title="Латте" 
                description="Эспрессо с молоком и небольшим количеством молочной пены" 
                price="280 ₽"
              />
              <MenuItem 
                title="Капучино" 
                description="Эспрессо с добавлением вспененного молока" 
                price="260 ₽"
              />
              <MenuItem 
                title="Флэт Уайт" 
                description="Двойной эспрессо с молоком" 
                price="290 ₽"
              />
            </div>
          </div>
          
          <div>
            <div className="bg-white/60 p-8 rounded-lg shadow-sm mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-mino-darkGreen flex items-center justify-center mr-4">
                  <span className="text-white text-lg">🥐</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-mino-charcoal">Выпечка</h3>
              </div>
              
              <div className="space-y-6">
                <MenuItem 
                  title="Круассан" 
                  description="Классический французский круассан из слоеного теста" 
                  price="220 ₽"
                />
                <MenuItem 
                  title="Киш с овощами" 
                  description="Открытый пирог с заварным кремом и сезонными овощами" 
                  price="320 ₽"
                />
                <MenuItem 
                  title="Чизкейк" 
                  description="Нежный чизкейк с ягодным соусом" 
                  price="290 ₽"
                />
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/8ef4285b-bc4d-42e0-b63a-159de1b97b2f.jpg" 
                alt="MINO coffee and croissant" 
                className="rounded-lg shadow-lg w-full aspect-video object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
