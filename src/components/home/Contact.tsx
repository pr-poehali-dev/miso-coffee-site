import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mino-container">
        <div className="text-center mb-12">
          <h2 className="mino-heading text-3xl md:text-4xl font-bold mb-4">Посетите нас</h2>
          <div className="w-24 h-1 bg-mino-green mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-mino-beige rounded-lg p-8 shadow-sm">
            <h3 className="font-serif text-2xl font-bold mb-6">Контактная информация</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-mino-green mt-1 mr-3" />
                <div>
                  <h4 className="font-medium mb-1">Адрес</h4>
                  <p className="text-mino-charcoal/80">ул. Пушкина, 10<br />Москва, 123456</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-mino-green mt-1 mr-3" />
                <div>
                  <h4 className="font-medium mb-1">Часы работы</h4>
                  <p className="text-mino-charcoal/80">
                    Пн-Пт: 8:00 - 21:00<br />
                    Сб-Вс: 9:00 - 22:00
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-mino-green mt-1 mr-3" />
                <div>
                  <h4 className="font-medium mb-1">Телефон</h4>
                  <p className="text-mino-charcoal/80">+7 (123) 456-7890</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button className="bg-mino-green hover:bg-mino-darkGreen w-full">
                Забронировать столик
              </Button>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-sm h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80" 
              alt="MINO Кофейня" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
