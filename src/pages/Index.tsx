import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Tours from "@/components/Tours";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Promo />
      <Tours />
      <ContactForm />
      <div className="bg-neutral-900 px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-0 mb-8">
          <div className="flex gap-12 sm:gap-20">
            <div className="flex flex-col gap-2">
              <h3 className="uppercase text-neutral-400 text-xs tracking-wide mb-1">Контакты</h3>
              <a href="tel:+79147740496" className="text-white hover:text-neutral-400 transition-colors text-sm">+7 (914) 774-04-96</a>
              <a href="https://vk.com/dikaia_planeta" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-400 transition-colors text-sm">ВКонтакте</a>
              <a href="https://t.me/dikaia_planeta" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-400 transition-colors text-sm">Telegram</a>
              <a href="https://www.youtube.com/@Дикая_Планета" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-400 transition-colors text-sm">YouTube</a>
            </div>
          </div>
          <p className="text-neutral-400 text-sm">{new Date().getFullYear()} ООО Дикая Планета</p>
        </div>
        <h1 className="text-[9vw] sm:text-[8vw] lg:text-[7vw] leading-[0.8] text-white font-bold tracking-tight">
          ДИКАЯ ПЛАНЕТА
        </h1>
      </div>
    </main>
  );
};

export default Index;