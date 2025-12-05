import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const properties = [
  {
    id: 1,
    title: "Двухкомнатная квартира в центре",
    type: "Жилая недвижимость",
    price: "12 500 000 ₽",
    area: "65 м²",
    location: "ул. Тверская, д. 15",
    image: "https://cdn.poehali.dev/projects/0f90dbeb-cb45-448e-846f-14970e9ce9a5/files/1ff5a945-6217-4147-99ab-45fc1775bd19.jpg",
    description: "Современная квартира с панорамными окнами и качественным ремонтом"
  },
  {
    id: 2,
    title: "Офисное помещение класса А",
    type: "Коммерческая недвижимость",
    price: "45 000 000 ₽",
    area: "180 м²",
    location: "Бизнес-центр «Москва-Сити»",
    image: "https://cdn.poehali.dev/projects/0f90dbeb-cb45-448e-846f-14970e9ce9a5/files/39efbdd5-c3b5-414e-819e-f1e38b07d28b.jpg",
    description: "Престижный офис с современной инфраструктурой"
  },
  {
    id: 3,
    title: "Трёхкомнатная квартира Premium",
    type: "Жилая недвижимость",
    price: "28 900 000 ₽",
    area: "120 м²",
    location: "ЖК «Триумф Палас»",
    image: "https://cdn.poehali.dev/projects/0f90dbeb-cb45-448e-846f-14970e9ce9a5/files/5036e96a-7aca-459f-a988-1dd455a0f6b9.jpg",
    description: "Роскошная квартира в элитном жилом комплексе"
  }
];

const advantages = [
  {
    icon: "Shield",
    title: "Юридическая чистота",
    description: "Полная проверка всех документов и сопровождение сделки"
  },
  {
    icon: "Users",
    title: "Индивидуальный подход",
    description: "Персональный менеджер на всех этапах сотрудничества"
  },
  {
    icon: "Clock",
    title: "Экономия времени",
    description: "Подбор объектов точно под ваши требования"
  },
  {
    icon: "TrendingUp",
    title: "Выгодные условия",
    description: "Помощь в получении ипотеки и поиске лучших предложений"
  }
];

const testimonials = [
  {
    name: "Елена Соколова",
    role: "Покупатель квартиры",
    text: "Профессиональная команда! Помогли найти идеальную квартиру за две недели. Полностью сопровождали сделку от начала до конца.",
    rating: 5
  },
  {
    name: "Дмитрий Волков",
    role: "Аренда офиса",
    text: "Благодаря агентству быстро нашли офисное помещение под наш бизнес. Все документы оформили оперативно и грамотно.",
    rating: 5
  },
  {
    name: "Анна Петрова",
    role: "Продажа недвижимости",
    text: "Продали квартиру по отличной цене! Агенты провели качественную оценку и привели серьёзных покупателей.",
    rating: 5
  }
];

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Наш менеджер свяжется с вами в ближайшее время.",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Building2" className="text-primary" size={28} />
            <span className="text-2xl font-bold text-foreground">Премиум Реалти</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#properties" className="text-muted-foreground hover:text-primary transition-colors">Объекты</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
              Ваш надёжный партнёр<br />в мире недвижимости
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Помогаем найти идеальную недвижимость для жизни и бизнеса в Москве
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Search" size={20} className="mr-2" />
                Подобрать объект
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Icon name="Calculator" size={20} className="mr-2" />
                Оценить недвижимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Премиум Реалти — агентство недвижимости с 15-летним опытом работы на рынке Москвы. 
              Мы специализируемся на жилой и коммерческой недвижимости, предлагая полный спектр услуг: 
              от подбора объектов до сопровождения сделок.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={advantage.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="properties" className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Актуальные предложения</h2>
            <p className="text-lg text-muted-foreground">
              Подборка лучших объектов недвижимости в Москве
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 group animate-scale-in">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold text-primary">{property.type}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{property.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{property.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="MapPin" size={16} className="text-muted-foreground" />
                      <span className="text-muted-foreground">{property.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Home" size={16} className="text-muted-foreground" />
                      <span className="text-muted-foreground">{property.area}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl font-bold text-primary">{property.price}</span>
                    <Button size="sm">
                      <Icon name="Phone" size={16} className="mr-2" />
                      Узнать больше
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">
              Нам доверяют сотни довольных клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg animate-scale-in">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Готовы помочь вам найти идеальную недвижимость
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@premium-realty.ru</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Арбат, д. 10</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Оставить заявку</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input 
                        id="name"
                        name="name"
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input 
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        placeholder="ivan@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        placeholder="Расскажите, что вас интересует..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full text-lg">
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

      <footer className="bg-foreground text-background py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Building2" size={24} />
              <span className="text-xl font-bold">Премиум Реалти</span>
            </div>
            <p className="text-background/70">© 2024 Премиум Реалты. Все права защищены.</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-background hover:text-background/80">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-background/80">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-background/80">
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}