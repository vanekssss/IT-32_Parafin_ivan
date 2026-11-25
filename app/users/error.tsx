
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>Не вдалося завантажити користувачів</h2>

      <button onClick={() => reset()}>
        Спробувати ще раз
      </button>
    </div>
  );
}
