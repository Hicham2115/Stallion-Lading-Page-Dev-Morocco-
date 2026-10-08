"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useForm, useStore } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { ArrowRight, Check, ChevronDown } from "lucide-react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}
const trackPixel = (event: string, data?: Record<string, unknown>) =>
  window.fbq?.("track", event, data);

const projectTypes = [
  "Site vitrine",
  "Boutique en ligne",
  "CRM",
  "Plateforme",
  "Application mobile",
  "Produit SaaS",
];
const timelines = [
  "Dans le mois",
  "Dans 2 à 3 mois",
  "Dans les 6 mois",
  "Dans l’année",
  "Je ne sais pas encore",
];
const projectSchema = z.object({
  projectType: z.string().min(1),
  timeline: z.string().min(1),
  name: z.string().trim().min(1).max(100),
  role: z.string().trim().max(100),
  email: z.string().email(),
  phone: z.string().trim().min(5).max(30),
});

function SelectField({
  label,
  placeholder,
  value,
  options,
  onChange,
}: {
  label: string;
  placeholder?: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      if (!fieldRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () =>
      document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, []);

  return (
    <div ref={fieldRef} className="relative">
      <span className="mb-2 block text-[13px] font-semibold text-[#d9dcda]">
        {label}
      </span>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="flex min-h-13 w-full items-center justify-between rounded-xl border border-white/12 bg-[#0d1011] px-4 text-left text-[15px] text-white transition hover:border-[#65891c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bafc0c]"
      >
        <span
          className={`${value ? "text-white" : "text-[#777d7e]"} lg:whitespace-nowrap`}
        >
          {value || placeholder || `Choisir : ${label.toLowerCase()}`}
        </span>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className={open ? "rotate-180 transition" : "transition"}
        />
      </button>
      {open && (
        <div
          role="listbox"
          aria-label={label}
          className="pointer-events-auto absolute left-0 top-full z-[1000] mt-2 w-full overflow-hidden rounded-xl border border-white/12 bg-[#171b1c] p-1 shadow-2xl"
        >
          {options.map((option) => (
            <button
              key={option}
              type="button"
              role="option"
              aria-selected={value === option}
              onClick={(event) => {
                event.stopPropagation();
                onChange(option);
                setOpen(false);
              }}
              className="flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-3 text-left text-[15px] text-[#e7e9e7] transition hover:bg-[#65891c]/25 hover:text-white"
            >
              {option}
              {value === option && (
                <Check
                  size={16}
                  aria-hidden="true"
                  className="text-[#bafc0c]"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Closing() {
  const [submitted, setSubmitted] = useState(false);
  const started = useRef(false);
  useEffect(() => {
    trackPixel("ViewContent", { content_name: "Formulaire prototype gratuit" });
  }, []);
  const form = useForm({
    defaultValues: {
      projectType: "",
      timeline: "",
      name: "",
      role: "",
      email: "",
      phone: "",
    },
    onSubmit: async ({ value }) => submitMutation.mutate(value),
  });
  const projectType = useStore(form.store, (state) => state.values.projectType);
  const timeline = useStore(form.store, (state) => state.values.timeline);
  const submitMutation = useMutation({
    mutationFn: async (values: typeof form.state.values) => {
      const data = projectSchema.parse(values);
      const message = [
        "Bonjour Stallion Advertising, je souhaite discuter de la création gratuite d’un prototype.",
        "",
        `Type de produit : ${data.projectType}`,
        `Délai de lancement : ${data.timeline}`,
        `Nom : ${data.name}`,
        `Fonction : ${data.role || "Non précisée"}`,
        `E-mail : ${data.email}`,
        `Téléphone : ${data.phone}`,
      ].join("\n");
      window.open(
        `https://wa.me/212649557449?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer",
      );
    },
    onSuccess: () => {
      trackPixel("Lead", { content_name: "Demande de prototype gratuit" });
      trackPixel("CompleteRegistration", {
        content_name: "Demande de prototype gratuit",
      });
      setSubmitted(true);
    },
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    form.handleSubmit();
  }

  function handleStart() {
    if (started.current) return;
    started.current = true;
    trackPixel("InitiateCheckout", {
      content_name: "Formulaire prototype gratuit",
    });
  }

  return (
    <section
      id="project-form"
      className="relative z-1 mx-auto mt-12 w-[min(100%-2.5rem,980px)] scroll-mt-24 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#65891c]/20 to-white/[.025] px-5 py-12 sm:px-8 sm:py-16"
    >
      <div className="mx-auto max-w-2xl">
        <p className="text-center font-mono text-[11px] uppercase tracking-[.2em] text-[#bafc0c]">
          DÉMARRER UN PROJET
        </p>
        <h2 className="mt-4 text-center text-[42px] font-black leading-none tracking-[-.045em] sm:text-[56px]">
          Contactez-nous pour votre prototype gratuit.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-[16px] text-[#b6b9bb]">
          Parlez-nous de votre idée. Nous vous répondrons pour vous proposer la
          meilleure prochaine étape.
        </p>
        {submitted ? (
          <div className="mt-10 rounded-2xl border border-[#bafc0c]/30 bg-[#bafc0c]/10 p-8 text-center">
            <Check
              className="mx-auto text-[#bafc0c]"
              size={28}
              aria-hidden="true"
            />
            <h3 className="mt-4 text-[24px] font-bold">
              Merci, votre demande est envoyée.
            </h3>
            <p className="mt-2 text-[15px] text-[#b6b9bb]">
              Notre équipe de développement étudiera votre projet et vous
              contactera dans les meilleurs délais.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            onFocus={handleStart}
            className="mt-10 space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <SelectField
                label="Type de produit"
                value={projectType}
                options={projectTypes}
                onChange={(value) => form.setFieldValue("projectType", value)}
              />
              <SelectField
                label="Quand souhaitez-vous lancer votre projet ?"
                placeholder="Choisir un délai de lancement"
                value={timeline}
                options={timelines}
                onChange={(value) => form.setFieldValue("timeline", value)}
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-[13px] font-semibold text-[#d9dcda]">
                Prénom et nom
                <input
                  required
                  name="name"
                  autoComplete="name"
                  onChange={(event) =>
                    form.setFieldValue("name", event.target.value)
                  }
                  className="mt-2 min-h-13 w-full rounded-xl border border-white/12 bg-[#0d1011] px-4 text-[15px] text-white outline-none transition placeholder:text-[#777d7e] focus:border-[#bafc0c]"
                  placeholder="Votre nom"
                />
              </label>
              <label className="block text-[13px] font-semibold text-[#d9dcda]">
                Fonction{" "}
                <span className="font-normal text-[#777d7e]">(facultatif)</span>
                <input
                  name="role"
                  autoComplete="organization-title"
                  onChange={(event) =>
                    form.setFieldValue("role", event.target.value)
                  }
                  className="mt-2 min-h-13 w-full rounded-xl border border-white/12 bg-[#0d1011] px-4 text-[15px] text-white outline-none transition placeholder:text-[#777d7e]"
                  placeholder="Dirigeant, propriétaire, responsable…"
                />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-[13px] font-semibold text-[#d9dcda]">
                E-mail
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  onChange={(event) =>
                    form.setFieldValue("email", event.target.value)
                  }
                  className="mt-2 min-h-13 w-full rounded-xl border border-white/12 bg-[#0d1011] px-4 text-[15px] text-white outline-none transition placeholder:text-[#777d7e] focus:border-[#bafc0c]"
                  placeholder="you@company.com"
                />
              </label>
              <label className="block text-[13px] font-semibold text-[#d9dcda]">
                Téléphone
                <input
                  required
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  onChange={(event) =>
                    form.setFieldValue("phone", event.target.value)
                  }
                  className="mt-2 min-h-13 w-full rounded-xl border border-white/12 bg-[#0d1011] px-4 text-[15px] text-white outline-none transition placeholder:text-[#777d7e] focus:border-[#bafc0c]"
                  placeholder="+212 6XX XXX XXX"
                />
              </label>
            </div>
            <button
              type="submit"
              disabled={!projectType || !timeline}
              className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#bafc0c] px-3 py-3.5 text-[12px] font-extrabold text-[#0a0c0d] whitespace-nowrap shadow-[0_0_30px_rgba(186,252,12,.3)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#bafc0c] sm:gap-2.5 sm:px-5 sm:text-[15px]"
            >
              Obtenez votre prototype gratuitement
              <ArrowRight size={19} aria-hidden="true" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
