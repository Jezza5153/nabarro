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
import { useLanguage } from "@/lib/language-provider";
import { getCopy } from "@/lib/i18n";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";

const formSchema = z.object({
  name: z.string().min(2, { message: "Please enter your name." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  subject: z.enum(["lessons", "catering", "consulting", "other"], {
    required_error: "Please select a subject.",
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to be contacted.",
  }),
});

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const { locale } = useLanguage();
  const t = getCopy(locale).contact;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      consent: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      const result = await submitContactForm(values);
      if (result.success) {
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
                    {t.success_message}
                </p>
            </CardContent>
        </Card>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
               <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="lessons">Lessons</SelectItem>
                  <SelectItem value="catering">Catering</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
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
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Consent to be contacted
                </FormLabel>
                <FormDescription>
                  I agree to be contacted regarding my inquiry.
                </FormDescription>
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
