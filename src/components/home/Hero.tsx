
const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-mino-beige opacity-90 z-0"></div>
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('https://cdn.poehali.dev/files/a4c66818-a11e-4792-a4e2-a2de6acfd6af.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      
      <div className="mino-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-10 inline-block">
            <img 
              src="https://cdn.poehali.dev/files/8ef4285b-bc4d-42e0-b63a-159de1b97b2f.jpg" 
              alt="MINO café" 
              className="w-48 md:w-64 mx-auto"
            />
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-mino-charcoal mb-6 tracking-wide">
            Уютное пространство<br />для особенных моментов
          </h1>
          
          <p className="text-mino-coffee text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Авторский кофе, свежая выпечка и атмосфера, 
            где каждая деталь создана для вашего комфорта
          </p>
          
          <button className="mino-button px-8 py-3 text-lg">
            Забронировать столик
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
