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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
          <h1 className="text-[9vw] sm:text-[8vw] lg:text-[7vw] leading-[0.8] text-white font-bold tracking-tight">
            ДИКАЯ ПЛАНЕТА
          </h1>
          <p className="text-white text-sm sm:text-base">{new Date().getFullYear()} ООО Дикая Планета</p>
        </div>
      </div>
    </main>
  );
};

export default Index;