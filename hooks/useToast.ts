import { useEffect, useState } from "react";

export default function useToast() {
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return { toast, setToast };
}
