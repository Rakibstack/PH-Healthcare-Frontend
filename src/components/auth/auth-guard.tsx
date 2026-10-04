"use client";

import { useCurrentUser } from "@/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { data, isPending, isError } = useCurrentUser();
  const router = useRouter();

  const user = data?.data;

  useEffect(() => {
    if (isPending) {
      return;
    }

    if (!user || isError) {
      router.replace("/login");
    }
  }, [isError, isPending,router, user]);

  return <>{children}</>;
};
