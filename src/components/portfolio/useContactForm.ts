"use client";

import { FormEvent, useState } from "react";

export function useContactForm() {
  const [formError, setFormError] = useState("");
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setIsMessageSent(false);
    setFormError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Message could not be sent.");
      }

      form.reset();
      setIsMessageSent(true);
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "Message could not be sent right now.",
      );
    } finally {
      setIsSending(false);
    }
  }

  return {
    formError,
    handleContactSubmit,
    isMessageSent,
    isSending,
  };
}
