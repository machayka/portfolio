"use client";
import { IconLoader } from "@tabler/icons-react";
import { useState } from "react";
import { toast } from "sonner";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (e: any) => {
    setLoading(true);
    setDisabled(true);

    e.preventDefault();

    const response = await fetch("https://submit-form.com/03JMeOYXX", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name.value,
        email: formData.email.value,
        message: formData.message.value,
      }),
    });

    if (response.ok) {
      alert("Wiadomość wysłana!");
      setFormData(defaultFormState);
      toast("Wiadomość została wysłana", {
        description:
          "Dziękuję za kontakt! Odpowiem najszybciej, jak to możliwe.",
      });
    } else {
      alert("Coś poszło nie tak...");
      toast("Wiadomość nie została wysłana", {
        description: "Coś poszło nie tak... Spróbuj ponownie.",
        action: {
          label: "Wyślij ponownie",
          onClick: () => handleSubmit({ preventDefault: () => {} }),
        },
      });
    }
    setLoading(false);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Twoje imię i nazwisko"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.name.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
        <input
          type="email"
          placeholder="Twój adres email"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.email.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <div>
        <textarea
          placeholder="Twoja wiadomość"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <button
        className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500"
        type="submit"
        disabled={disabled}
      >
        {loading ? <IconLoader className="animate-spin mx-auto" /> : "Wyślij"}
      </button>
    </form>
  );
};
