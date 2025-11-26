import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const features = [
    {
      icon: 'Gauge',
      title: 'Высокая производительность',
      description: 'До 12 000 м² площади уборки за час работы',
    },
    {
      icon: 'Droplets',
      title: 'Система орошения',
      description: 'Автоматическое увлажнение для беспыльной уборки',
    },
    {
      icon: 'Battery',
      title: 'Автономность',
      description: 'До 8 часов непрерывной работы на одном баке',
    },
    {
      icon: 'Wrench',
      title: 'Простое обслуживание',
      description: 'Модульная конструкция и доступ ко всем узлам',
    },
    {
      icon: 'Shield',
      title: 'Надежность',
      description: 'Европейское качество, гарантия 24 месяца',
    },
    {
      icon: 'Leaf',
      title: 'Экологичность',
      description: 'Экономия воды и низкий уровень выбросов',
    },
  ];

  const specs = [
    { label: 'Ширина подметания', value: '2200 мм' },
    { label: 'Ширина всасывания', value: '1100 мм' },
    { label: 'Производительность', value: '12 000 м²/ч' },
    { label: 'Объем бункера', value: '2.5 м³' },
    { label: 'Объем бака для воды', value: '400 л' },
    { label: 'Тип двигателя', value: 'Дизель, 74 л.с.' },
    { label: 'Скорость движения', value: '0-25 км/ч' },
    { label: 'Время работы', value: '8 часов' },
  ];

  const gallery = [
    {
      src: 'https://cdn.poehali.dev/projects/b838fbc4-b860-4123-ae39-fe02410814c1/files/dafaaa2d-246b-4167-a5e4-658b5775a0ce.jpg',
      alt: 'Уборочная машина - вид спереди',
    },
    {
      src: 'https://cdn.poehali.dev/projects/b838fbc4-b860-4123-ae39-fe02410814c1/files/2caf6923-29e7-4264-aced-00b0e49092d3.jpg',
      alt: 'Уборочная машина - вид сбоку',
    },
    {
      src: 'https://cdn.poehali.dev/projects/b838fbc4-b860-4123-ae39-fe02410814c1/files/154d914c-d761-4e56-b468-378475b0a150.jpg',
      alt: 'Уборочная машина - детали',
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Truck" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-secondary">CleanMaster Pro</span>
          </div>
          <Button size="lg" className="hidden md:flex">
            <Icon name="Phone" size={20} className="mr-2" />
            Связаться с нами
          </Button>
        </div>
      </header>

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-muted via-white to-orange-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary text-white px-4 py-1 text-sm">
                Новое поступление
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-secondary leading-tight">
                Коммунальная уборочная машина премиум-класса
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональное решение для эффективной уборки больших территорий.
                Надежность, производительность и экономия в одной машине.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Icon name="ShoppingCart" size={24} className="mr-2" />
                  Оставить заявку
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <Icon name="Info" size={24} className="mr-2" />
                  Узнать больше
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">12 000</div>
                  <div className="text-sm text-muted-foreground">м² в час</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">8</div>
                  <div className="text-sm text-muted-foreground">часов работы</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24</div>
                  <div className="text-sm text-muted-foreground">мес. гарантия</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-orange-600 rounded-3xl blur-3xl opacity-20"></div>
              <img
                src={gallery[0].src}
                alt={gallery[0].alt}
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Преимущества</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Почему выбирают CleanMaster Pro
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Технологичное решение для современных городских служб
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Галерея</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Фотографии машины
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-semibold p-6">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="specs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Характеристики</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Технические параметры
            </h2>
          </div>
          <Card className="max-w-4xl mx-auto border-2">
            <CardContent className="p-0">
              <div className="divide-y">
                {specs.map((spec, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-2 gap-4 p-6 hover:bg-muted/50 transition-colors"
                  >
                    <div className="font-semibold text-secondary">{spec.label}</div>
                    <div className="text-muted-foreground text-right">{spec.value}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-secondary to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary">Контакты</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Свяжитесь с нами
              </h2>
              <p className="text-xl text-gray-300">
                Оставьте заявку, и мы ответим в течение 30 минут
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-1">Телефон</div>
                      <a href="tel:+79001234567" className="text-gray-300 hover:text-primary transition-colors">
                        +7 (900) 123-45-67
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-1">Email</div>
                      <a href="mailto:info@cleanmaster.ru" className="text-gray-300 hover:text-primary transition-colors">
                        info@cleanmaster.ru
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-1">Адрес</div>
                      <p className="text-gray-300">
                        г. Москва, ул. Промышленная, 15
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Ваше сообщение"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full text-lg h-12">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Truck" size={28} />
            <span className="text-xl font-bold">CleanMaster Pro</span>
          </div>
          <p className="text-gray-400">© 2024 CleanMaster Pro. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
