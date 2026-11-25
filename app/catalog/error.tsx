"use client";

export default function CatalogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="errorBox">
      <h1>Помилка завантаження</h1>

      <p>
        {error.message ||
          "Не вдалося отримати список товарів."}
      </p>

      <button
        className="button"
        onClick={() => reset()}
      >
        Спробувати ще раз
      </button>
    </section>
  );
}