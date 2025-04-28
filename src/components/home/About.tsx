
const About = () => {
  return (
    <section className="py-16 md:py-24 bg-mino-darkBeige/20">
      <div className="mino-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="mino-heading text-3xl md:text-4xl font-bold mb-6">
              О кафе MINO
            </h2>
            <p className="text-mino-coffee mb-4 text-lg">
              MINO – это не просто кафе, а особое пространство, где современный дизайн сочетается 
              с уютной атмосферой. Мы создали место, где можно насладиться моментом спокойствия 
              в ритме большого города.
            </p>
            <p className="text-mino-coffee mb-6 text-lg">
              Каждая деталь у нас продумана: от авторского кофе до интерьера в минималистичном стиле 
              с натуральными материалами. В MINO мы ценим простоту, гармонию и внимание к мелочам.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-mino-green rounded-full mr-3"></span>
                <span className="text-mino-charcoal">Свежеобжаренный кофе от локальных ростеров</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-mino-green rounded-full mr-3"></span>
                <span className="text-mino-charcoal">Авторская выпечка, приготовленная с любовью</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-mino-green rounded-full mr-3"></span>
                <span className="text-mino-charcoal">Безупречный сервис и внимание к каждому гостю</span>
              </li>
            </ul>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="aspect-square overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://cdn.poehali.dev/files/8ef4285b-bc4d-42e0-b63a-159de1b97b2f.jpg" 
                alt="MINO café interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 md:-left-10 w-32 md:w-48 aspect-square bg-mino-green/10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
