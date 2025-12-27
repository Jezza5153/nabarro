"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle, LoaderCircle } from "lucide-react";

import { submitContactForm } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader } from "./ui/card";
import { project } from "@/content/project";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";

const formSchema = z.object({
  name: z.string().min(2, { message: "Please enter your full name." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  reason: z.enum(
    [
      "try-out",
      "private-lesson",
      "small-group",
      "technique-improvement",
      "abc-diploma",
      "other",
    ],
    {
      required_error: "Please select a reason for your inquiry.",
    }
  ),
  message: z
    .string()
    .min(10, { message: "Please tell us a bit more in your message." }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to be contacted about your request.",
  }),
  honeypot: z.string().optional(), // Anti-spam honeypot field
});


export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const { toast } = useToast();
  const t = project.i18n.en.contact;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      consent: false,
      honeypot: "",
    },
  });

  const reasonOptions = [
    { value: "try-out", label: "Try-out" },
    { value: "private-lesson", label: "Private lesson" },
    { value: "small-group", label: "Small group" },
    { value: "technique-improvement", label: "Technique improvement" },
    { value: "abc-diploma", label: "A/B/C diploma" },
    { value: "other", label: "Other" },
  ];

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      const result = await submitContactForm(values);
      if (result.success) {
        setSuccessMessage(result.message);
        setSubmitted(true);
      } else {
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: result.message || "Could not send your message. Please try again.",
        });
      }
    });
  }

  if (submitted) {
    return (
        <Card className="text-center bg-accent/50">
            <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-6 w-6 text-primary" />
                </div>
            </CardHeader>
            <CardContent>
                <h3 className="text-xl font-semibold">{t.success_title}</h3>
                <p className="mt-2 text-muted-foreground">
                    {successMessage || t.success_message}
                </p>
            </CardContent>
        </Card>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Honeypot field for anti-spam */}
        <FormField
            control={form.control}
            name="honeypot"
            render={({ field }) => (
            <FormItem className="absolute w-0 h-0 overflow-hidden">
                <FormLabel>Please leave this field empty</FormLabel>
                <FormControl>
                <Input {...field} tabIndex={-1} autoComplete="off" />
                </FormControl>
            </FormItem>
            )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.form_name}</FormLabel>
              <FormControl>
                <Input placeholder={t.form_name_placeholder} {...field} />
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
              <FormLabel>{t.form_email}</FormLabel>
              <FormControl>
                <Input placeholder={t.form_email_placeholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone <span className="text-muted-foreground">(optional)</span></FormLabel>
              <FormControl>
                <Input placeholder="Your phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="reason"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reason for inquiry</FormLabel>
               <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a reason" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {reasonOptions.map(option => (
                      <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.form_message}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t.form_message_placeholder}
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I agree to be contacted about my request.
                </FormLabel>
                 <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? (
            <>
              <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
              {t.form_button_sending}
            </>
          ) : (
            t.form_button
          )}
        </Button>
      </form>
    </Form>
  );
}
