import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sprout" className="text-green-600" size={32} />
            <span className="text-2xl font-bold text-green-600">ТеплицаДом</span>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('home')} className="hover:text-green-600 transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('catalog')} className="hover:text-green-600 transition-colors">
              Каталог
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-green-600 transition-colors">
              О компании
            </button>
            <button onClick={() => scrollToSection('delivery')} className="hover:text-green-600 transition-colors">
              Доставка
            </button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-green-600 transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('contacts')} className="hover:text-green-600 transition-colors">
              Контакты
            </button>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
