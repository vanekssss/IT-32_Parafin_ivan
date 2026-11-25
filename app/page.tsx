
import RequestForm from "./components/RequestForm";

export default function Home() {
  return (
    <main>
      <h1>Звернення до техпідтримки</h1>
      <p>
        Заповніть форму, щоб повідомити про проблему із сайтом.
      </p>

      <RequestForm />
    </main>
  );
}
