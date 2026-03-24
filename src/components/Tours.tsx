import { useState } from "react";
import Icon from "@/components/ui/icon";

const tours = [
  {
    id: 1,
    title: "Греция: Санторини",
    description: "Белоснежные деревни над вулканической кальдерой, закаты в Ойе и лучшие вина Эгейского моря.",
    duration: "8 дней",
    groupSize: "до 12 человек",
    price: 89000,
    tag: "Европа",
    image: "https://cdn.poehali.dev/projects/10900ab2-55b6-4d16-b05e-9b09b3118385/files/a81b72fd-230f-499a-8d9e-61f0f4e6beb4.jpg",
  },
  {
    id: 2,
    title: "Бали: Остров богов",
    description: "Рисовые террасы Убуда, храм Танах Лот и серфинг на лучших волнах Индийского океана.",
    duration: "10 дней",
    groupSize: "до 10 человек",
    price: 105000,
    tag: "Азия",
    image: "https://cdn.poehali.dev/projects/10900ab2-55b6-4d16-b05e-9b09b3118385/files/7f5721a4-ca88-4181-85ca-21376c4d407a.jpg",
  },
  {
    id: 3,
    title: "Африка: Сафари Кения",
    description: "Большая миграция в Масаи-Мара, ночёвки в саванне и рассвет над бесконечными равнинами.",
    duration: "12 дней",
    groupSize: "до 8 человек",
    price: 195000,
    tag: "Африка",
    image: "https://cdn.poehali.dev/projects/10900ab2-55b6-4d16-b05e-9b09b3118385/files/24be806a-82ca-4020-9bba-2455652f1e63.jpg",
  },
  {
    id: 4,
    title: "Исландия: Северное сияние",
    description: "Погоня за авророй, купание в горячих источниках и ледниковые походы по Ватнайёкюдлю.",
    duration: "7 дней",
    groupSize: "до 10 человек",
    price: 120000,
    tag: "Европа",
    image: "https://cdn.poehali.dev/projects/10900ab2-55b6-4d16-b05e-9b09b3118385/files/bb59c10c-7848-4363-9951-316f842f6ac8.jpg",
  },
  {
    id: 5,
    title: "Япония: Сакура и храмы",
    description: "Токио, Киото, Нара — цветение сакуры, чайные церемонии и гора Фудзи на горизонте.",
    duration: "14 дней",
    groupSize: "до 12 человек",
    price: 145000,
    tag: "Азия",
    image: "https://cdn.poehali.dev/projects/10900ab2-55b6-4d16-b05e-9b09b3118385/files/39f9ea4b-2504-4e12-9392-ee8ebb8a58e9.jpg",
  },
  {
    id: 6,
    title: "Мальдивы: Рай на земле",
    description: "Бунгало над лагуной, кристальная вода, дайвинг среди мант и полное отключение от мира.",
    duration: "9 дней",
    groupSize: "до 6 человек",
    price: 175000,
    tag: "Азия",
    image: "https://cdn.poehali.dev/projects/10900ab2-55b6-4d16-b05e-9b09b3118385/files/24d4473b-df2e-4999-971f-1f09966e5f4a.jpg",
  },
];

const tags = ["Все", "Европа", "Азия", "Африка"];

export default function Tours() {
  const [activeTag, setActiveTag] = useState("Все");

  const filtered = activeTag === "Все" ? tours : tours.filter((t) => t.tag === activeTag);

  return (
    <div id="tours" className="bg-neutral-50 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
          Наши туры
        </h2>
        <p className="text-neutral-500 mb-10 max-w-xl">
          Авторские маршруты по самым впечатляющим уголкам планеты
        </p>

        <div className="flex gap-2 mb-12 flex-wrap">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 text-sm uppercase tracking-wide border transition-colors duration-200 cursor-pointer ${
                activeTag === tag
                  ? "bg-black text-white border-black"
                  : "bg-white text-neutral-700 border-neutral-300 hover:border-black"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((tour) => (
            <div key={tour.id} className="bg-white group overflow-hidden flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-white text-black text-xs uppercase tracking-wide px-2 py-1">
                  {tour.tag}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{tour.title}</h3>
                <p className="text-neutral-500 text-sm mb-4 flex-1">{tour.description}</p>
                <div className="flex gap-4 text-xs text-neutral-400 mb-6">
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    {tour.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Users" size={14} />
                    {tour.groupSize}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-neutral-400 uppercase tracking-wide">от</span>
                    <span className="text-2xl font-bold text-neutral-900 ml-1">
                      {tour.price.toLocaleString("ru-RU")} ₽
                    </span>
                  </div>
                  <a
                    href="#contact"
                    className="bg-black text-white text-xs uppercase tracking-wide px-4 py-2 hover:bg-neutral-800 transition-colors"
                  >
                    Записаться
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
