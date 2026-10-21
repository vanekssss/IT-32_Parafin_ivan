
import Link from "next/link";

export default function Catalog() {
  return (
    <>
      <p className="description">
        Обирай потрібну категорію та знаходь техніку
        для своїх щоденних завдань.
      </p>

      <div className="grid">
        <article className="product-card">
          <div className="product-icon">📱</div>
          <h3>Смартфони</h3>
          <p>Сучасні телефони для роботи та розваг.</p>
          <Link href="/catalog/smartphones" className="button">
            Переглянути
          </Link>
        </article>

        <article className="product-card">
          <div className="product-icon">💻</div>
          <h3>Ноутбуки</h3>
          <p>Пристрої для навчання, роботи та ігор.</p>
          <Link href="/catalog/laptops" className="button">
            Переглянути
          </Link>
        </article>
      </div>

      <div className="info-panel" style={{ marginTop: 24 }}>
        <h3>Перевірка обробки помилок</h3>
        <p>
          Натисни посилання, щоб перевірити сторінку error.tsx.
        </p>
        <Link
          href="/catalog/smartphones?testError=1"
          className="button"
        >
          Викликати тестову помилку
        </Link>
      </div>
    </>
  );
}
