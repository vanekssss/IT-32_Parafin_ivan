"use client";

import { useActionState } from "react";
import {
  createOrder,
  type OrderState,
} from "../actions";

const initialState: OrderState = {
  success: false,
  message: "",
  errors: {},
};

export default function RequestForm({
  defaultProduct,
}: {
  defaultProduct: string;
}) {
  const [state, formAction, pending] =
    useActionState(createOrder, initialState);

  return (
    <form
      className="requestForm"
      action={formAction}
    >
      <label>
        Ваше ім’я

        <input
          name="name"
          type="text"
          placeholder="Іван"
          required
          minLength={2}
        />

        {state.errors.name && (
          <small className="fieldError">
            {state.errors.name}
          </small>
        )}
      </label>

      <label>
        Email

        <input
          name="email"
          type="email"
          placeholder="name@example.com"
          required
        />

        {state.errors.email && (
          <small className="fieldError">
            {state.errors.email}
          </small>
        )}
      </label>

      <label>
        Назва товару

        <input
          name="product"
          type="text"
          defaultValue={defaultProduct}
          placeholder="Наприклад, Smartphone"
          required
          minLength={2}
        />

        {state.errors.product && (
          <small className="fieldError">
            {state.errors.product}
          </small>
        )}
      </label>

      <label>
        Кількість

        <input
          name="quantity"
          type="number"
          defaultValue="1"
          min="1"
          max="99"
          required
        />

        {state.errors.quantity && (
          <small className="fieldError">
            {state.errors.quantity}
          </small>
        )}
      </label>

      <button
        className="button"
        type="submit"
        disabled={pending}
      >
        {pending
          ? "Надсилання..."
          : "Надіслати замовлення"}
      </button>

      {state.message && (
        <p
          className={
            state.success
              ? "successMessage"
              : "errorMessage"
          }
        >
          {state.message}
        </p>
      )}
    </form>
  );
}