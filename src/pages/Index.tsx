import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const { toast } = useToast();

  const services = [
    {
      icon: "Wrench",
      title: "Установка",
      description: "Профессиональный монтаж сплит-систем любой сложности с гарантией качества",
      price: "от 8 000 ₽"
    },
    {
      icon: "Sparkles",
      title: "Чистка",
      description: "Глубокая очистка внутренних и внешних блоков кондиционера",
      price: "от 3 000 ₽"
    },
    {
      icon: "Settings",
      title: "Обслуживание",
      description: "Регулярное техническое обслуживание и диагностика систем",
      price: "от 1 500 ₽"
    },
    {
      icon: "Droplets",
      title: "Заправка фреоном",
      description: "Дозаправка и полная замена хладагента в системе",
      price: "от 700 ₽/100г"
    },
    {
      icon: "Zap",
      title: "Ремонт",
      description: "Устранение неисправностей и замена комплектующих",
      price: "от 0 ₽"
    }
  ];

  const gallery = [
    {
      url: "https://cdn.poehali.dev/projects/956c7524-a90a-4f29-81e7-bfde7203a8ff/files/da778bd1-7e30-4b8f-8ce6-3d0234695620.jpg",
      title: "Установка сплит-системы"
    },
    {
      url: "https://cdn.poehali.dev/projects/956c7524-a90a-4f29-81e7-bfde7203a8ff/files/acc5a594-75da-47fb-b1e0-9a40044372ec.jpg",
      title: "Чистка кондиционера"
    },
    {
      url: "https://cdn.poehali.dev/projects/956c7524-a90a-4f29-81e7-bfde7203a8ff/files/5fda8475-2ca9-4bb7-bee0-e10a2baf4368.jpg",
      title: "Монтаж внешнего блока"
    },
    {
      url: "https://cdn.poehali.dev/projects/956c7524-a90a-4f29-81e7-bfde7203a8ff/files/5f8c84f4-6e76-4be0-9a07-394ea0cda30a.jpg",
      title: "Обслуживание внутреннего блока"
    },
    {
      url: "https://cdn.poehali.dev/projects/956c7524-a90a-4f29-81e7-bfde7203a8ff/files/cc83fc04-18fd-455c-9bb3-347c75ccb570.jpg",
      title: "Ремонт компрессора"
    },
    {
      url: "https://cdn.poehali.dev/projects/956c7524-a90a-4f29-81e7-bfde7203a8ff/files/200722fc-a6ef-4501-94b4-3f18d9cfa7d9.jpg",
      title: "Готовая установка в интерьере"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast({ title: "Ошибка", description: "Заполните все поля", variant: "destructive" });
      return;
    }
    
    try {
      const message = `🆕 Новая заявка с сайта!\n\n👤 Имя: ${formData.name}\n📞 Телефон: ${formData.phone}`;
      const botToken = '7906763466:AAEb7vxwL3WHEn6ITGsL15N4pRX7K86YXv8';
      const chatId = '431900446';
      
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message })
      });
      
      if (response.ok) {
        toast({ title: "Успешно!", description: "Мы свяжемся с вами в ближайшее время" });
        setFormData({ name: '', phone: '' });
      } else {
        throw new Error('Failed');
      }
    } catch (error) {
      toast({ title: "Ошибка", description: "Попробуйте позвонить напрямую", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Snowflake" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">ХолодОК</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-primary transition-colors">
                Галерея
              </button>
              <button onClick={() => scrollToSection('price')} className="text-gray-700 hover:text-primary transition-colors">
                Прайс
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
            <a href="tel:+79371341627" className="hidden md:block">
              <Button size="lg">
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить
              </Button>
            </a>
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>
          
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in">
              <div className="flex flex-col p-4 space-y-4">
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-primary transition-colors py-2">
                  Услуги
                </button>
                <button onClick={() => scrollToSection('gallery')} className="text-left text-gray-700 hover:text-primary transition-colors py-2">
                  Галерея
                </button>
                <button onClick={() => scrollToSection('price')} className="text-left text-gray-700 hover:text-primary transition-colors py-2">
                  Прайс
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-primary transition-colors py-2">
                  О нас
                </button>
                <button onClick={() => scrollToSection('contacts')} className="text-left text-gray-700 hover:text-primary transition-colors py-2">
                  Контакты
                </button>
                <a href="tel:+79371341627" className="w-full">
                  <Button size="lg" className="w-full">
                    <Icon name="Phone" className="mr-2" size={20} />
                    Позвонить
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Профессиональное обслуживание
            <span className="block text-primary mt-2">сплит-систем</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Установка, чистка, ремонт и обслуживание кондиционеров с гарантией качества
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <Icon name="Phone" className="mr-2" size={24} />
              Заказать звонок
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => scrollToSection('price')}>
              <Icon name="Calculator" className="mr-2" size={24} />
              Узнать цены
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Полный спектр услуг по установке и обслуживанию климатической техники
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2 hover:border-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наши работы</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Примеры выполненных работ по установке и обслуживанию климатической техники
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => setSelectedImage(image.url)}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-xl font-semibold p-6">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Полноразмерное изображение"
            className="max-w-full max-h-full object-contain animate-scale-in"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={32} />
          </Button>
        </div>
      )}

      <section id="price" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Прайс-лист</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Прозрачные цены на все виды услуг
          </p>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-0">
                {[
                  { service: "Установка настенной сплит-системы", price: "от 8 000 ₽" },
                  { service: "Установка канальной системы", price: "от 15 000 ₽" },
                  { service: "Чистка внутреннего блока", price: "от 3 000 ₽" },
                  { service: "Чистка внешнего блока", price: "от 3 000 ₽" },
                  { service: "Полное обслуживание системы", price: "от 5 000 ₽" },
                  { service: "Заправка фреоном (за 100 грамм)", price: "от 700 ₽" },
                  { service: "Диагностика неисправностей", price: "Бесплатно" },
                  { service: "Ремонт (в зависимости от поломки)", price: "от 0 ₽" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`flex justify-between items-center p-6 ${
                      index !== 0 ? 'border-t' : ''
                    } hover:bg-blue-50/50 transition-colors`}
                  >
                    <span className="text-lg">{item.service}</span>
                    <span className="text-xl font-bold text-primary">{item.price}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <p className="text-center text-gray-500 mt-6">
              * Итоговая стоимость зависит от сложности работ и модели оборудования
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">О компании</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center p-8 border-2 hover:border-primary transition-colors">
                <div className="text-5xl font-bold text-primary mb-2">5+</div>
                <p className="text-gray-600">лет опыта</p>
              </Card>
              <Card className="text-center p-8 border-2 hover:border-primary transition-colors">
                <div className="text-5xl font-bold text-secondary mb-2">1000+</div>
                <p className="text-gray-600">довольных клиентов</p>
              </Card>
              <Card className="text-center p-8 border-2 hover:border-primary transition-colors">
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <p className="text-gray-600">гарантия качества</p>
              </Card>
            </div>
            <Card className="p-8 border-2">
              <CardContent className="p-0">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ХолодОК — динамично развивающаяся компания по установке и обслуживанию климатического оборудования в Астрахани. 
                  Мы работаем на рынке более 5 лет и уже обслужили более 1000 довольных клиентов, 
                  зарекомендовав себя как надёжный партнёр для дома и бизнеса.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: "CheckCircle", text: "Сертифицированные специалисты" },
                    { icon: "Shield", text: "Гарантия на все виды работ" },
                    { icon: "Clock", text: "Выезд в день обращения" },
                    { icon: "Wrench", text: "Профессиональное оборудование" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Icon name={item.icon as any} className="text-secondary" size={24} />
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-2">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Телефон</h3>
                    <p className="text-gray-600">+7 (937) 134-16-27</p>
                    <p className="text-gray-600">+7 (917) 080-78-01</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600">astraclimat@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Адрес</h3>
                    <p className="text-gray-600">г. Астрахань</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Режим работы</h3>
                    <p className="text-gray-600">Пн-Вс: 8:00 - 22:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-8 border-2 bg-gradient-to-br from-primary to-secondary text-white">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Закажите звонок</h3>
                <p className="mb-6 opacity-90">
                  Оставьте заявку, и мы перезвоним вам в течение 15 минут
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg text-gray-900"
                    required
                  />
                  <input 
                    type="tel" 
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg text-gray-900"
                    required
                  />
                  <Button type="submit" className="w-full bg-white text-primary hover:bg-white/90 py-6">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Snowflake" size={32} />
            <span className="text-2xl font-bold">ХолодОК</span>
          </div>
          <p className="text-gray-400 mb-4">
            © 2024 ХолодОК. Все права защищены.
          </p>
          <div className="flex justify-center gap-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;