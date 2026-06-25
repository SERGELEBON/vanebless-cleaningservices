"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/site";

const bookingSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(8, "Invalid phone number"),
  email: z
    .string()
    .email("Invalid email")
    .optional()
    .or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  date: z.string().optional(),
  message: z.string().optional(),
});

type BookingValues = z.infer<typeof bookingSchema>;

type BookingFormProps = {
  defaultService?: string;
  compact?: boolean;
  /** Variant: "booking" (default) or "quote" */
  variant?: "booking" | "quote";
};

export function BookingForm({
  defaultService,
  compact = false,
  variant = "booking",
}: BookingFormProps) {
  const [submitted, setSubmitted] = React.useState(false);

  const form = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: defaultService ?? "",
      date: "",
      message: "",
    },
  });

  const onSubmit = async (values: BookingValues) => {
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, type: variant }),
      });
      if (!res.ok) throw new Error("Send failed");
      setSubmitted(true);
      toast.success(
        variant === "quote"
          ? "Quote request sent! We'll contact you within 24h."
          : "Booking sent! We'll contact you within 24h."
      );
      form.reset();
    } catch {
      toast.error("An error occurred. Please try again or call us.");
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-600" />
        <h3 className="text-lg font-bold text-slate-900">Request sent!</h3>
        <p className="text-sm text-slate-600">
          Thank you for your trust. Our team will contact you shortly.
        </p>
        <Button
          variant="outline"
          size="sm"
          className="mt-2"
          onClick={() => setSubmitted(false)}
        >
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
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
                <FormLabel>Phone *</FormLabel>
                <FormControl>
                  <Input placeholder="020 650 5564" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {variant === "booking" && (
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service needed *</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="max-h-72">
                  {services.map((s) => (
                    <SelectItem key={s.id} value={s.title}>
                      {s.title}
                    </SelectItem>
                  ))}
                  <SelectItem value="Other">Other / Not sure</SelectItem>
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
              <FormLabel>Details (optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Surface, address, specific constraints..."
                  className="min-h-[90px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full bg-brand-red text-white hover:bg-brand-red-dark"
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              {variant === "quote" ? "Get my free quote" : "Confirm booking"}
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
