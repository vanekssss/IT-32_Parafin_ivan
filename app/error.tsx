
"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="error-panel">
      <h2>Сталася помилка</h2>
      <p>Не вдалося відобразити сторінку.</p>
      <button className="button" onClick={() => reset()}>
        Повторити
      </button>
    </div>
  );
}
