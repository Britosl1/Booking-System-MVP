"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PrimaryButton from "../PrimaryButton";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  date: z.string().refine((date) => {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  }, "Date must be today or in the future"),
  time: z.string().refine((time) => {
    return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time);
  }, "Please enter a valid time"),
}).refine((data) => {
  const selectedDate = new Date(data.date);
  const [hours, minutes] = data.time.split(':').map(Number);
  selectedDate.setHours(hours, minutes, 0, 0);
  return selectedDate > new Date();
}, {
  message: "Date and time must be in the future",
  path: ["time"],
});

export type BookingFormData = z.infer<typeof bookingSchema>;

interface IBookingForm {
  onSubmit: (data: BookingFormData) => void;
  onCancel: () => void;
}

export default function BookingForm({  onSubmit, onCancel }: IBookingForm) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 max-w-md mx-auto">

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
            Full Name *
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-md text-white placeholder-zinc-500 focus:outline-none focus:border-[#F39AB3] transition-colors"
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
            Email Address *
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-md text-white placeholder-zinc-500 focus:outline-none focus:border-[#F39AB3] transition-colors"
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-zinc-300 mb-2">
            Date *
          </label>
          <input
            {...register("date")}
            type="date"
            id="date"
            className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-md text-white focus:outline-none focus:border-[#F39AB3] transition-colors"
          />
          {errors.date && (
            <p className="text-red-400 text-sm mt-1">{errors.date.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-zinc-300 mb-2">
            Time *
          </label>
          <input
            {...register("time")}
            type="time"
            id="time"
            className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-md text-white focus:outline-none focus:border-[#F39AB3] transition-colors"
          />
          {errors.time && (
            <p className="text-red-400 text-sm mt-1">{errors.time.message}</p>
          )}
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-4 py-2.5 border border-zinc-700 text-zinc-300 rounded-md hover:bg-zinc-800 transition-colors"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <div className="flex-1">
            <PrimaryButton 
              name={isSubmitting ? "Booking..." : "Confirm Booking"}
              onClick={handleSubmit(onSubmit)}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
