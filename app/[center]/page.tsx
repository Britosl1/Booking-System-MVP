"use client";

import { useCenter } from "@/api/queries/useCenters";
import BookingForm, { BookingFormData } from "@/components/BookingForm";
import ErrorPage from "@/components/ErrorPage";
import LoadingSpinner from "@/components/LoadingSpinner";
import Modal from "@/components/Modal";
import ServicesCard from "@/components/ServicesCard";
import Toast from "@/components/Toast";
import useModal from "@/hooks/useModal";
import useToast from "@/hooks/useToast";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { createForm } from "@/lib/slices/formSlice";
import Image from "next/image";
import { useParams } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

export default function CenterPage() {
  const { center: id } = useParams();
  const { data: centers, error, isLoading } = useCenter(id as string);
  const { open, setOpen } = useModal();
  const { toast, setToast } = useToast();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.formReducer);

  const handleCloseModal = () => {
    setOpen((prev) => !prev);
  };

  const onSubmit: SubmitHandler<BookingFormData> = (data) => {
    dispatch(createForm(data));
    handleCloseModal();
    setToast((prev) => !prev);
  };

  if (error) {
    return <ErrorPage message={"No center found :("} />;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="relative w-full h-[300px]">
        <Image
          src={centers?.logo as string}
          alt={centers?.name as string}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg object-cover shadow-md"
          loading="eager"
        />
      </div>
      <h2 className="text-center">Welcome to {centers?.name} Page</h2>
      <p className="text-center">{centers?.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-4">
        {centers?.services.map((service) => (
          <ServicesCard
            key={service.id}
            onClick={() => setOpen(true)}
            {...service}
          />
        ))}
      </div>
      <Modal title="Book here!" open={open} onClose={handleCloseModal}>
        <BookingForm onCancel={handleCloseModal} onSubmit={onSubmit} />
      </Modal>
      {toast && <Toast status="success" message={"Appointment Booked"} formData={state} />}
    </div>
  );
}
