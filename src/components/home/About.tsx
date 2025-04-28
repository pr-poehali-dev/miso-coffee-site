const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mino-container">
        <div className="text-center mb-12">
          <h2 className="mino-heading text-3xl md:text-4xl font-bold mb-4">О кофейне MINO</h2>
          <div className="w-24 h-1 bg-mino-green mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-mino-beige rounded-lg p-8 shadow-sm transform transition-transform hover:scale-105">
            <div className="w-12 h-12 bg-mino-green/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🍵</span>
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">Японская эстетика</h3>
            <p className="text-mino-charcoal/80">
              Наше пространство вдохновлено японским минимализмом, создавая атмосферу спокойствия и гармонии.
            </p>
          </div>
          
          <div className="bg-mino-beige rounded-lg p-8 shadow-sm transform transition-transform hover:scale-105">
            <div className="w-12 h-12 bg-mino-green/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">☕</span>
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">Особая обжарка</h3>
            <p className="text-mino-charcoal/80">
              Мы сами обжариваем кофе, тщательно подбирая зерна со всего мира для создания уникального вкусового профиля.
            </p>
          </div>
          
          <div className="bg-mino-beige rounded-lg p-8 shadow-sm transform transition-transform hover:scale-105">
            <div className="w-12 h-12 bg-mino-green/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🍡</span>
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">Авторская кухня</h3>
            <p className="text-mino-charcoal/80">
              Наше меню сочетает традиционные японские десерты с современными кофейными напитками для неповторимого опыта.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
