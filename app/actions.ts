"use server";

export type OrderState = {
  success: boolean;
  message: string;
  errors: {
    name?: string;
    email?: string;
    product?: string;
    quantity?: string;
  };
};

export async function createOrder(
  previousState: OrderState,
  formData: FormData
): Promise<OrderState> {
  const name = String(
    formData.get("name") ?? ""
  ).trim();

  const email = String(
    formData.get("email") ?? ""
  ).trim();

  const product = String(
    formData.get("product") ?? ""
  ).trim();

  const quantityText = String(
    formData.get("quantity") ?? ""
  ).trim();

  const quantity = Number(quantityText);

  const errors: OrderState["errors"] = {};

  if (name.length < 2) {
    errors.name =
      "Введіть ім’я мінімум з 2 символів.";
  }

  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    errors.email =
      "Введіть правильну email-адресу.";
  }

  if (product.length < 2) {
    errors.product =
      "Вкажіть назву товару.";
  }

  if (
    !Number.isInteger(quantity) ||
    quantity < 1 ||
    quantity > 99
  ) {
    errors.quantity =
      "Кількість має бути від 1 до 99.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Перевірте введені дані.",
      errors,
    };
  }

  return {
    success: true,
    message: `Дякуємо, ${name}! Заявку на товар «${product}» у кількості ${quantity} шт. прийнято.`,
    errors: {},
  };
}