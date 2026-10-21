
import Link from "next/link";

type Props = {
  searchParams: Promise<{ testError?: string }>;
};

const phones = [
  { name: "iPhone 16", price: "34 999 грн", icon: "📱" },
  { name: "Samsung Galaxy S25", price: "39 999 грн", icon: "📲" },
  { name: "Google Pixel 9", price: "29 999 грн", icon: "📱" },
];

export default async function Smartphones({ searchParams }: Props) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const params = await searchParams;

  if (params.testError === "1") {
    throw new Error("Тестова помилка завантаження смартфонів");
  }

  return (
    <>
      <p className="description">
        Обирай смартфон для спілкування, фотографій та роботи.
      </p>

      <div className="grid">
        {phones.map((phone) => (
          <article className="product-card" key={phone.name}>
            <div className="product-icon">{phone.icon}</div>
            <h3>{phone.name}</h3>
            <p className="price">{phone.price}</p>
          </article>
        ))}
      </div>

      <p>
        <Link href="/catalog">← Повернутися до каталогу</Link>
      </p>
    </>
  );
}
