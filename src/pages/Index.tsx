import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const greenhouseProducts = [
    {
      id: 1,
      name: 'Теплица "Капля"',
      type: 'Профиль 25/25',
      description: '3м ширина, длина 4, 6, 8, 10 метров',
      image: 'https://cdn.poehali.dev/projects/094de351-3137-40fb-9088-178d167c8280/files/4493ddcc-cd95-4e59-888b-8aa4489f4735.jpg',
      features: ['Каплевидная форма', 'Усиленный профиль 25×25мм', 'Ширина 3м'],
    },
    {
      id: 2,
      name: 'Теплица "Домик" треугольная',
      type: 'Профиль 20/20',
      description: '3м ширина, длина 4, 6, 8, 10 метров',
      image: 'https://cdn.poehali.dev/projects/094de351-3137-40fb-9088-178d167c8280/files/57c04d8f-a5f3-457f-b47f-1c3c2aab0df4.jpg',
      features: ['Крыша треугольник', 'Профиль 20×20мм', 'Ширина 3м'],
    },
    {
      id: 3,
      name: 'Теплица "Домик" полукруг',
      type: 'Профиль 20/20',
      description: '3м ширина, длина 4, 6, 8, 10 метров',
      image: 'https://cdn.poehali.dev/projects/094de351-3137-40fb-9088-178d167c8280/files/4493ddcc-cd95-4e59-888b-8aa4489f4735.jpg',
      features: ['Крыша полукруг', 'Профиль 20×20мм', 'Ширина 3м'],
    },
    {
      id: 4,
      name: 'Теплица арочная',
      type: 'Профиль 25/25',
      description: '3м ширина, длина 4, 6, 8, 10 метров',
      image: 'https://cdn.poehali.dev/projects/094de351-3137-40fb-9088-178d167c8280/files/4493ddcc-cd95-4e59-888b-8aa4489f4735.jpg',
      features: ['Классическая арка', 'Усиленный профиль 25×25мм', 'Ширина 3м'],
    },
    {
      id: 5,
      name: 'Теплица арочная усиленная',
      type: 'Профиль 20/30',
      description: '3м ширина, длина 4, 6, 8, 10 метров',
      image: 'https://cdn.poehali.dev/projects/094de351-3137-40fb-9088-178d167c8280/files/4493ddcc-cd95-4e59-888b-8aa4489f4735.jpg',
      features: ['Арочная форма', 'Профиль 20×30мм', 'Повышенная прочность'],
    },
    {
      id: 6,
      name: 'Теплица арочная премиум',
      type: 'Профиль 20/40',
      description: '3м ширина, длина 4, 6, 8, 10 метров',
      image: 'https://cdn.poehali.dev/projects/094de351-3137-40fb-9088-178d167c8280/files/4493ddcc-cd95-4e59-888b-8aa4489f4735.jpg',
      features: ['Максимальная прочность', 'Профиль 20×40мм', 'Премиум-класс'],
    },
  ];

  const polycarbonateProducts = [
    { name: 'Поликарбонат 4мм', description: 'Стандартная толщина' },
    { name: 'Поликарбонат 6мм', description: 'Оптимальная теплоизоляция' },
    { name: 'Поликарбонат 6мм цветной', description: 'С UV-защитой' },
    { name: 'Поликарбонат 8мм', description: 'Усиленный' },
    { name: 'Поликарбонат 8мм цветной', description: 'Премиум качество' },
  ];

  const accessories = [
    { name: 'Торцевые вставки', description: 'Для 4мм, 6мм, 8мм' },
    { name: 'Соединительный профиль', description: 'Для 4мм, 6мм, 8мм' },
    { name: 'Термо шайбы', description: 'Цветные и прозрачные' },
  ];

  const gazebos = [
    { name: 'Беседка "Пион"', description: 'Классический дизайн' },
    { name: 'Беседка "Астра"', description: 'Современный стиль' },
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      text: 'Отличная теплица! Собрали за выходные, всё лето радовала урожаем огурцов и томатов.',
      rating: 5,
    },
    {
      name: 'Сергей Иванов',
      text: 'Прочная конструкция, выдержала снежную зиму без проблем. Рекомендую!',
      rating: 5,
    },
    {
      name: 'Марина Козлова',
      text: 'Купили теплицу с профилем 20/40 - очень довольны качеством и результатом.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
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

      <section id="catalog" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Каталог теплиц</h2>
            <p className="text-xl text-gray-600">Выберите подходящую модель для вашего участка</p>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Теплицы</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {greenhouseProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-green-600">{product.type}</Badge>
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-green-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      Заказать
                      <Icon name="ShoppingCart" size={18} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Package" className="text-green-600" />
                Поликарбонат
              </h3>
              <div className="space-y-4">
                {polycarbonateProducts.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                    <Icon name="Plus" className="text-green-600" size={20} />
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Settings" className="text-green-600" />
                Комплектующие
              </h3>
              <div className="space-y-4">
                {accessories.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                    <Icon name="Plus" className="text-green-600" size={20} />
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Home" className="text-green-600" />
                Беседки
              </h3>
              <div className="space-y-4">
                {gazebos.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                    <Icon name="Plus" className="text-green-600" size={20} />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании ТеплицаДом</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Мы занимаемся производством и продажей качественных теплиц с 2017 года. 
                  За это время помогли более 2000 садоводов получить богатый урожай.
                </p>
                <p>
                  Наши теплицы изготавливаются из усиленного профиля и покрываются надёжным 
                  поликарбонатом с UV-защитой. Каждая конструкция проходит контроль качества.
                </p>
                <p>
                  Работаем напрямую с производством, что позволяет держать доступные цены 
                  и предоставлять гарантию на все изделия.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-100 p-6 rounded-xl text-center">
                <Icon name="Users" size={48} className="mx-auto mb-4 text-green-600" />
                <div className="text-3xl font-bold text-green-600">2000+</div>
                <div className="text-gray-700">клиентов</div>
              </div>
              <div className="bg-orange-100 p-6 rounded-xl text-center">
                <Icon name="Award" size={48} className="mx-auto mb-4 text-orange-600" />
                <div className="text-3xl font-bold text-orange-600">5 лет</div>
                <div className="text-gray-700">гарантия</div>
              </div>
              <div className="bg-blue-100 p-6 rounded-xl text-center">
                <Icon name="Factory" size={48} className="mx-auto mb-4 text-blue-600" />
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-gray-700">контроль качества</div>
              </div>
              <div className="bg-purple-100 p-6 rounded-xl text-center">
                <Icon name="MapPin" size={48} className="mx-auto mb-4 text-purple-600" />
                <div className="text-3xl font-bold text-purple-600">Вся РФ</div>
                <div className="text-gray-700">доставка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Доставка и оплата</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <Icon name="Truck" size={48} className="text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Доставка</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-600 mt-1" size={20} />
                  <span>Бесплатно по Москве и МО (в пределах 50км)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-600 mt-1" size={20} />
                  <span>По России транспортными компаниями</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-600 mt-1" size={20} />
                  <span>Сроки доставки: 1-3 дня по МСК, 5-14 дней по РФ</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-600 mt-1" size={20} />
                  <span>Выгрузка и подъём до участка включены</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Icon name="CreditCard" size={48} className="text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Оплата</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-600 mt-1" size={20} />
                  <span>Наличными при получении</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-600 mt-1" size={20} />
                  <span>Банковской картой онлайн</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-600 mt-1" size={20} />
                  <span>Безналичный расчёт для юр. лиц</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-600 mt-1" size={20} />
                  <span>Возможна рассрочка 0% на 6 месяцев</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-green-50 border-green-200">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Icon name="Wrench" className="text-green-600" />
              Монтаж теплицы
            </h3>
            <p className="text-lg mb-4">
              Предлагаем профессиональную установку теплицы под ключ. Наши специалисты 
              соберут конструкцию за 1 день с гарантией качества.
            </p>
            <div className="flex items-center gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600">
                Заказать монтаж
              </Button>
              <span className="text-gray-600">Стоимость от 5 000 ₽</span>
            </div>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-green-600" size={24} />
                  </div>
                  <div className="font-semibold">{review.name}</div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
              Все отзывы
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-b from-green-600 to-green-700 text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="Phone" size={32} className="text-green-200" />
                <div>
                  <div className="text-sm text-green-200 mb-1">Телефон</div>
                  <a href="tel:+74951234567" className="text-2xl font-bold hover:text-green-200 transition-colors">
                    +7 (495) 123-45-67
                  </a>
                  <div className="text-green-200 mt-1">Ежедневно с 9:00 до 21:00</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Mail" size={32} className="text-green-200" />
                <div>
                  <div className="text-sm text-green-200 mb-1">Email</div>
                  <a href="mailto:info@teplitsadom.ru" className="text-xl font-bold hover:text-green-200 transition-colors">
                    info@teplitsadom.ru
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={32} className="text-green-200" />
                <div>
                  <div className="text-sm text-green-200 mb-1">Адрес</div>
                  <div className="text-xl">Москва, ул. Садовая, д. 123</div>
                </div>
              </div>
            </div>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Оставьте заявку</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-600 outline-none"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-600 outline-none"
                />
                <textarea
                  placeholder="Комментарий"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-600 outline-none resize-none"
                />
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
                  Отправить заявку
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sprout" size={28} />
                <span className="text-xl font-bold">ТеплицаДом</span>
              </div>
              <p className="text-gray-400">
                Качественные теплицы для вашего урожая
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#catalog" className="hover:text-white transition-colors">Теплицы</a></li>
                <li><a href="#catalog" className="hover:text-white transition-colors">Поликарбонат</a></li>
                <li><a href="#catalog" className="hover:text-white transition-colors">Беседки</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#delivery" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@teplitsadom.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ТеплицаДом. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
