
const laptops = [
  { name: "ASUS Vivobook", price: "25 999 грн", icon: "💻" },
  { name: "Lenovo IdeaPad", price: "28 499 грн", icon: "🖥️" },
  { name: "MacBook Air", price: "49 999 грн", icon: "💻" },
];

export default function Laptops() {
  return (
    <>
      <p className="description">
        Ноутбуки для навчання, програмування, роботи та відпочинку.
      </p>

      <div className="grid">
        {laptops.map((laptop) => (
          <article className="product-card" key={laptop.name}>
            <div className="product-icon">{laptop.icon}</div>
            <h3>{laptop.name}</h3>
            <p className="price">{laptop.price}</p>
          </article>
        ))}
      </div>
    </>
  );
}
