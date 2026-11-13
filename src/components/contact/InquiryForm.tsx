"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { inquiryServices } from "@/config/business";
import { whatsappHref } from "@/lib/whatsapp";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number.")
    .regex(/^[0-9+\-\s()]{7,20}$/, "Enter a valid phone number."),
  vehicle: z.string().trim().min(2, "Please enter the vehicle make and model."),
  service: z
    .string()
    .refine((value) => (inquiryServices as readonly string[]).includes(value), "Please choose a service."),
  message: z.string().trim().min(10, "Please add a few details so we can respond."),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "mt-2 w-full border border-white/15 bg-ink px-4 py-3 text-sm text-white outline-none transition focus:border-blue";

export function InquiryForm() {
  const [readyUrl, setReadyUrl] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      vehicle: "",
      service: "Car Wrapping",
      message: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    const text = [
      "Hello Asif Car Wraps! I would like a quotation.",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Vehicle: ${values.vehicle}`,
      `Service: ${values.service}`,
      `Message: ${values.message}`,
    ].join("\n");
    const url = whatsappHref(text);
    setReadyUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    reset();
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-white">
          Customer name
          <input className={fieldClass} autoComplete="name" {...register("name")} />
          {errors.name ? <span className="mt-1 block text-xs text-pink">{errors.name.message}</span> : null}
        </label>
        <label className="block text-sm text-white">
          Phone number
          <input className={fieldClass} autoComplete="tel" inputMode="tel" {...register("phone")} />
          {errors.phone ? <span className="mt-1 block text-xs text-pink">{errors.phone.message}</span> : null}
        </label>
      </div>
      <label className="block text-sm text-white">
        Vehicle make and model
        <input className={fieldClass} {...register("vehicle")} />
        {errors.vehicle ? <span className="mt-1 block text-xs text-pink">{errors.vehicle.message}</span> : null}
      </label>
      <label className="block text-sm text-white">
        Preferred service
        <select className={fieldClass} {...register("service")}>
          {inquiryServices.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.service ? <span className="mt-1 block text-xs text-pink">{errors.service.message}</span> : null}
      </label>
      <label className="block text-sm text-white">
        Message
        <textarea className={`${fieldClass} min-h-32 resize-y`} {...register("message")} />
        {errors.message ? <span className="mt-1 block text-xs text-pink">{errors.message.message}</span> : null}
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-11 items-center bg-pink px-6 font-grotesk text-[11px] font-semibold uppercase tracking-[0.2em] text-ink hover:bg-[#ff3d8e] disabled:opacity-60"
      >
        Submit inquiry
      </button>
      <p className="text-xs leading-relaxed text-muted">
        Submitting opens WhatsApp with your details. This form does not send email and does not store a database record.
      </p>
      {readyUrl ? (
        <div role="status" className="border border-lime/40 bg-lime/10 p-4 text-sm leading-relaxed text-white">
          <p>Your inquiry is ready in WhatsApp. If a chat did not open, continue with the button below.</p>
          <a
            href={readyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex min-h-11 items-center bg-[#25D366] px-4 font-grotesk text-[11px] font-semibold uppercase tracking-[0.16em] text-ink"
          >
            Open WhatsApp
          </a>
        </div>
      ) : null}
    </form>
  );
}
