import Link from "next/link";

export default function HomePage() {
  return (
    <section className="hero">
      <p className="eyebrow">NEXT.JS APP ROUTER</p>

      <h1>Ласкаво просимо до ShopNext</h1>

      <p className="heroText">
        Переглядай товари, шукай потрібні речі
        та залишай заявку на замовлення.
      </p>

      <div className="actions">
        <Link className="button" href="/catalog">
          Переглянути каталог
        </Link>

        <Link className="button buttonLight" href="/form">
          Оформити замовлення
        </Link>
      </div>
    </section>
  );
}