
"use server";

import { z } from "zod";

const schema = z.object({
  fullName: z.string().trim().min(2, "Введіть мінімум 2 символи"),
  email: z.string().trim().email("Некоректний email"),
  topic: z.enum(["Вхід", "Сторінка", "Інше"], {
    error: "Оберіть тип проблеми",
  }),
  details: z.string().trim().min(15, "Введіть мінімум 15 символів"),
});

export type FormState = {
  success: boolean;
  message: string;
  errors: {
    fullName?: string[];
    email?: string[];
    topic?: string[];
    details?: string[];
  };
};

export async function submitRequest(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const result = schema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    topic: formData.get("topic"),
    details: formData.get("details"),
  });

  if (!result.success) {
    return {
      success: false,
      message: "Виправте помилки у формі",
      errors: z.flattenError(result.error).fieldErrors,
    };
  }

  return {
    success: true,
    message: "Звернення перевірено!",
    errors: {},
  };
}
