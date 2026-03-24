import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://functions.poehali.dev/9c104833-af48-43c5-9930-92dfd9682781", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="bg-white px-6 py-24 flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 text-center tracking-tight">
        Оставьте заявку
      </h2>
      <p className="text-neutral-500 mb-12 text-center max-w-md">
        Мы свяжемся с вами в течение часа и подберём идеальный тур
      </p>

      {status === "success" ? (
        <div className="text-center py-16">
          <p className="text-2xl font-bold text-neutral-900 mb-2">Заявка отправлена!</p>
          <p className="text-neutral-500">Мы скоро свяжемся с вами</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-8 bg-black text-white px-6 py-2 text-sm uppercase tracking-wide hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            Отправить ещё
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Ваше имя *"
            value={form.name}
            onChange={handleChange}
            required
            className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон *"
            value={form.phone}
            onChange={handleChange}
            required
            className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
          />
          <textarea
            name="message"
            placeholder="Куда хотите поехать? (необязательно)"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors resize-none"
          />
          {status === "error" && (
            <p className="text-red-500 text-sm">Ошибка отправки. Попробуйте ещё раз.</p>
          )}
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wide hover:bg-neutral-800 transition-colors cursor-pointer disabled:opacity-50"
          >
            {status === "loading" ? "Отправляем..." : "Отправить заявку"}
          </button>
        </form>
      )}
    </div>
  );
}
