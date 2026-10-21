
"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="error-panel">
      <p className="eyebrow">Помилка</p>
      <h2>Не вдалося завантажити товари</h2>
      <p>
        Під час завантаження сталася помилка.
        Спробуйте повторити спробу.
      </p>
      <button className="button" onClick={() => reset()}>
        Спробувати ще раз
      </button>
    </div>
  );
}
