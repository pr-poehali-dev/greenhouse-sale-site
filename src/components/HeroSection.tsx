import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <>
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Теплицы для богатого урожая
              </h1>
              <p className="text-xl text-gray-600">
                Качественные теплицы из поликарбоната с усиленным каркасом. Доставка и монтаж по всей России.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-lg px-8"
                  onClick={() => scrollToSection('catalog')}
                >
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8"
                >
                  Калькулятор цены
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">7+</div>
                  <div className="text-sm text-gray-600">лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">2000+</div>
                  <div className="text-sm text-gray-600">довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">5 лет</div>
                  <div className="text-sm text-gray-600">гарантия</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/094de351-3137-40fb-9088-178d167c8280/files/9d8f78eb-cf1c-4808-beb4-2be93ce2d0b9.jpg"
                alt="Теплица"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">-20%</div>
                <div className="text-sm">на первый заказ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <Icon name="Shield" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold">Гарантия 5 лет</h3>
              <p className="text-green-100">На весь каркас и покрытие</p>
            </div>
            <div className="space-y-2">
              <Icon name="Truck" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold">Бесплатная доставка</h3>
              <p className="text-green-100">По Москве и области</p>
            </div>
            <div className="space-y-2">
              <Icon name="Wrench" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold">Монтаж за 1 день</h3>
              <p className="text-green-100">Профессиональная установка</p>
            </div>
            <div className="space-y-2">
              <Icon name="BadgePercent" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold">Выгодные цены</h3>
              <p className="text-green-100">Работаем напрямую с заводом</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
