
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-mino-beige/95 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="mino-container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="https://cdn.poehali.dev/files/8ef4285b-bc4d-42e0-b63a-159de1b97b2f.jpg" 
            alt="MINO café" 
            className="h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                  >
                    Главная
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#menu">
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                  >
                    Меню
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#about">
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                  >
                    О нас
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#contact">
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                  >
                    Контакты
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-mino-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-mino-beige/95 backdrop-blur-sm shadow-md">
          <nav className="flex flex-col py-4">
            <Link
              to="/"
              className="py-2 px-8 text-mino-charcoal hover:bg-mino-darkBeige transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Главная
            </Link>
            <a
              href="#menu"
              className="py-2 px-8 text-mino-charcoal hover:bg-mino-darkBeige transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Меню
            </a>
            <a
              href="#about"
              className="py-2 px-8 text-mino-charcoal hover:bg-mino-darkBeige transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              О нас
            </a>
            <a
              href="#contact"
              className="py-2 px-8 text-mino-charcoal hover:bg-mino-darkBeige transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Контакты
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
