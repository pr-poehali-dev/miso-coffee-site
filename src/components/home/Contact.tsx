
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const ContactItem = ({ 
  icon, 
  title, 
  details 
}: { 
  icon: React.ReactNode; 
  title: string; 
  details: React.ReactNode; 
}) => (
  <div className="flex space-x-4 mb-8">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mino-green/10 flex items-center justify-center text-mino-green">
      {icon}
    </div>
    <div>
      <h3 className="font-serif text-lg font-medium text-mino-charcoal mb-1">{title}</h3>
      <div className="text-mino-coffee">{details}</div>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-mino-darkBeige/20">
      <div className="mino-container">
        <div className="text-center mb-16">
          <h2 className="mino-heading text-3xl md:text-4xl font-bold mb-4">
            Как нас найти
          </h2>
          <p className="text-mino-coffee max-w-2xl mx-auto">
            Мы всегда рады видеть вас в нашем кафе. Приходите насладиться особенной атмосферой MINO
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="order-2 md:order-1">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <ContactItem 
                icon={<MapPin size={24} />}
                title="Адрес"
                details={
                  <p>ул. Тверская, 12<br />Москва, 125009</p>
                }
              />
              
              <ContactItem 
                icon={<Clock size={24} />}
                title="Часы работы"
                details={
                  <p>Ежедневно<br />с 8:00 до 22:00</p>
                }
              />
              
              <ContactItem 
                icon={<Phone size={24} />}
                title="Телефон"
                details={
                  <a href="tel:+74951234567" className="hover:text-mino-green transition-colors">
                    +7 (495) 123-45-67
                  </a>
                }
              />
              
              <ContactItem 
                icon={<Mail size={24} />}
                title="Email"
                details={
                  <a href="mailto:hello@minocafe.ru" className="hover:text-mino-green transition-colors">
                    hello@minocafe.ru
                  </a>
                }
              />
            </div>
            
            <div className="mt-8">
              <button className="mino-button w-full py-3 flex items-center justify-center space-x-2">
                <span>Забронировать столик</span>
              </button>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative rounded-lg overflow-hidden h-full min-h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.347525141961!2d37.60335811592621!3d55.76172098055704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a451f8555a5%3A0xd8f58c22e41856f9!2z0KLQstC10YDRgdC60LDRjyDRg9C7LiwgMTIsINCc0L7RgdC60LLQsCwg0KDQvtGB0YHQuNGPLCAxMjUwMDk!5e0!3m2!1sru!2sru!4v1656421703788!5m2!1sru!2sru" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0, height: '100%' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="MINO café на карте"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
