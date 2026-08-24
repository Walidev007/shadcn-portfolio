"use client";

import { useState } from "react";
import { contactSubmit } from "@/app/[locale]/actions";
import { FormError } from "@/components/sections/contact/_components/form-error";
import { FormSuccess } from "@/components/sections/contact/_components/form-success";
import { TurnstileModal } from "@/components/sections/contact/_components/turnstile-modal";
import { contact } from "@/components/sections/contact/config";
import { env } from "@/env";
import { type Locale } from "@/i18n/routing";
import { useLocale } from "@/lib/locale";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import type { ContactForm as ContactFormType } from "@repo/validators";
import { Button } from "@repo/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/form";
import { Icons } from "@repo/ui/icons";
import { Input } from "@repo/ui/input";
import { Textarea } from "@repo/ui/textarea";
import { ContactFormSchema } from "@repo/validators";

const copy: Record<
  Locale,
  {
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendLabel: string;
    mailSubject: string;
    mailNameField: string;
    mailMessageField: string;
    captchaError: string;
  }
> = {
  en: {
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    messagePlaceholder:
      "Hi there!\n\nThis is Jane Doe from Example. Just wanted to say hello!",
    sendLabel: "Send",
    mailSubject: "Message from the contact form",
    mailNameField: "Name",
    mailMessageField: "Message",
    captchaError: "Captcha verification failed. Please complete the captcha.",
  },
  fr: {
    nameLabel: "Nom",
    emailLabel: "Email",
    messageLabel: "Message",
    messagePlaceholder:
      "Bonjour !\n\nIci Jane Doe, de Example. Je voulais juste passer un petit bonjour !",
    sendLabel: "Envoyer",
    mailSubject: "Envoi depuis le formulaire de contact",
    mailNameField: "Nom",
    mailMessageField: "Message",
    captchaError:
      "Échec de la validation du captcha. Merci de compléter le captcha.",
  },
};

export default function ContactForm() {
  const locale = useLocale();
  const t = copy[locale];
  const form = useForm<ContactFormType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { execute, result, status } = useAction(contactSubmit);
  const [isOpen, setIsOpen] = useState(false);

  // todo: probably refactor this, setIsOpen is not clean
  // values: ContactFormType
  function onSubmit(values: ContactFormType) {
    if (env.NEXT_PUBLIC_CONTACT_FORM_ENABLED === "true") {
      setIsOpen(true);
    } else {
      const mailto =
        `mailto:${encodeURIComponent(contact.email)}` +
        `?subject=${encodeURIComponent(t.mailSubject)}` +
        `&body=${encodeURIComponent(
          `${t.mailNameField}: ${values.name}\n${t.mailMessageField}: ${values.message}`,
        )}`;
      window.open(mailto);
    }
  }

  function onVerify(token?: string) {
    setIsOpen(false);
    if (!token) {
      toast.error(t.captchaError, {
        position: "bottom-center",
      });
      return;
    }
    execute({ ...form.getValues(), token });
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.nameLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Jane Doe"
                    disabled={status === "executing"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.emailLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="jane@example.com"
                    disabled={status === "executing"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.messageLabel}</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={status === "executing"}
                    placeholder={t.messagePlaceholder}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormError message={result.serverError} />
          <FormSuccess message={result.data?.success} />

          <Button
            disabled={status === "executing"}
            type="submit"
            className={"w-full"}
          >
            {status === "executing" && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {t.sendLabel}
          </Button>
        </form>
      </Form>
      <TurnstileModal open={isOpen} callback={onVerify} />
    </div>
  );
}
