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
    </main>
  );
};

export default Index;