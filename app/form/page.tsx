import RequestForm from "../components/RequestForm";

export default async function FormPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const params = await searchParams;

  return (
    <section className="formPage">
      <div className="pageHeading">
        <p className="eyebrow">ЗАМОВЛЕННЯ</p>

        <h1>Оформлення замовлення</h1>

        <p>
          Заповніть форму для оформлення заявки.
        </p>
      </div>

      <RequestForm
        defaultProduct={params.product ?? ""}
      />
    </section>
  );
}