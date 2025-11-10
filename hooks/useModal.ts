import { useState } from "react";

export default function useModal() {
  const [open, setOpen] = useState<boolean>(false);
  return {
    open,
    setOpen,
  };
}
