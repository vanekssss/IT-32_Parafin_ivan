
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">Технології для життя</p>
        <h1>Техніка, яка змінює щоденність</h1>
        <p className="description">
          Відкрий світ сучасних смартфонів, потужних ноутбуків
          та корисних гаджетів в одному місці.
        </p>
        <Link href="/catalog" className="button">
          Перейти до каталогу
        </Link>
      </section>

      <h2>Наші переваги</h2>
      <div className="grid">
        <article className="product-card">
          <div className="product-icon">📦</div>
          <h3>Швидка доставка</h3>
          <p>Отримуй замовлення у зручний для тебе час.</p>
        </article>

        <article className="product-card">
          <div className="product-icon">🛡️</div>
          <h3>Гарантія якості</h3>
          <p>Техніка для роботи, навчання та відпочинку.</p>
        </article>

        <article className="product-card">
          <div className="product-icon">💻</div>
          <h3>Великий вибір</h3>
          <p>Обирай гаджети відповідно до своїх потреб.</p>
        </article>
      </div>
    </>
  );
}
