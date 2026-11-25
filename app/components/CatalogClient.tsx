"use client";

import { useState } from "react";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
  rating: number;
};

export default function CatalogClient({
  products,
}: {
  products: Product[];
}) {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    `${product.title} ${product.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <div className="searchRow">
        <input
          className="searchInput"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Пошук товару..."
        />

        <span className="resultCount">
          Знайдено: {filteredProducts.length}
        </span>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="empty">
          Товарів не знайдено.
        </p>
      ) : (
        <div className="productGrid">
          {filteredProducts.map((product) => (
            <article
              className="productCard"
              key={product.id}
            >
              <img
                className="productImage"
                src={product.thumbnail}
                alt={product.title}
              />

              <div className="productInfo">
                <span className="category">
                  {product.category}
                </span>

                <h2>{product.title}</h2>

                <p className="description">
                  {product.description}
                </p>

                <div className="productBottom">
                  <strong>
                    ${product.price.toFixed(2)}
                  </strong>

                  <span>★ {product.rating}</span>
                </div>

                <Link
                  className="button buttonSmall"
                  href={`/form?product=${encodeURIComponent(
                    product.title
                  )}`}
                >
                  Замовити
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}