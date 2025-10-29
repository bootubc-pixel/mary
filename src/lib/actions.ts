"use server";

import { z } from "zod";
import { contactFormSchema } from "./schemas";

type ContactFormState = {
  success: boolean;
  message?: string;
};

export async function submitContactForm(
  values: z.infer<typeof contactFormSchema>
): Promise<ContactFormState> {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid data provided.",
    };
  }

  try {
    // Here you would typically send data to Firebase or another backend service
    console.log("New contact form submission:", parsed.data);
    
    // Simulate a delay for network request
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For now, we'll just return a success message.
    return { success: true };

  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
