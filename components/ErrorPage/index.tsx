"use client";

import { useRouter } from "next/navigation";
import PrimaryButton from "../PrimaryButton";

interface IErrorPage {
  message: string;
}

export default function ErrorPage({ message }: IErrorPage) {
  const navigate = useRouter();

  const handleNavigation = () => {
    navigate.push("/");
  };
  return (
    <div className="flex flex-col gap-6 items-center justify-center  border-2 border-white rounded-lg p-4 max-h-120">
      <p className="text-5xl">{message}</p>

      <PrimaryButton name="Go back to main page" onClick={handleNavigation} />
    </div>
  );
}
