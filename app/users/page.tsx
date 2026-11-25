
type User = {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
};

export default async function UsersPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=8",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Помилка завантаження користувачів");
  }

  const users: User[] = await res.json();

  return (
    <main style={{ padding: "40px", maxWidth: "1100px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Список користувачів
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              padding: "25px",
              border: "1px solid #ddd",
              borderRadius: "12px",
              backgroundColor: "#f5f8ff",
            }}
          >
            <h2 style={{ marginBottom: "15px", color: "#2563eb" }}>
              {user.name}
            </h2>

            <p>Email: {user.email}</p>
            <p>Місто: {user.address.city}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
