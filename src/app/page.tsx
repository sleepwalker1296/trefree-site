export default function Home() {
  return (
    <main className="container min-h-screen py-16 grid gap-10">
      <header className="grid gap-3 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Trefree — Трезвый водитель
        </h1>
        <p className="text-white/70">
          Быстрый вызов трезвого водителя по Санкт‑Петербургу и ЛО, 24/7.
        </p>
      </header>

      <section className="max-w-2xl mx-auto w-full p-6 rounded-3xl neon-border bg-[#0e1333]/60 backdrop-blur">
        <h2 className="text-xl mb-4 font-semibold">Сделать заказ</h2>
        <form
          className="grid gap-4"
          action="https://httpbin.org/post"
          method="POST"
        >
          <input className="input" name="from" placeholder="Откуда" required />
          <input className="input" name="to" placeholder="Куда" required />
          <input className="input" name="phone" placeholder="Телефон" required />
          <input className="input" name="price" placeholder="Ориентировочная цена" />
          <button className="button glow-btn" type="submit">Вызвать водителя</button>
        </form>
        <p className="mt-3 text-xs text-white/50">
          Отправляя заявку, вы соглашаетесь с политикой конфиденциальности.
        </p>
      </section>

      <footer className="text-center text-white/40 text-sm">
        © {new Date().getFullYear()} Trefree. Все права защищены.
      </footer>
    </main>
  );
}
// redeploy 13.09.2025 19:20:41,48
