import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const CatalogSection = () => {
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

  return (
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
  );
};

export default CatalogSection;
