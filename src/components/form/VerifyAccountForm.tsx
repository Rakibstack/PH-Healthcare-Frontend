"use client";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useResendVerificationOtp, useVerifyAccount } from "@/hooks";
import { toast } from "sonner";

export default function VerifyAccountForm() {
  const [otp, setOtp] = useState("");
  const searchParams = useSearchParams();

  const email = searchParams.get("email") || "";
  const route = useRouter();
  const { mutate: verifyAccount, isPending } = useVerifyAccount();
  const { mutate: resendOtp, isPending: isResending } =
    useResendVerificationOtp();

  useEffect(() => {
    if (!email) {
      route.push("/");
    }
  }, [email, route]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (otp.length !== 6) {
      return;
    }

    const verifyData = {
      email,
      otp,
    };
    verifyAccount(verifyData, {
      onSuccess: () => {
        toast.success("Verify User Account Successfully");
        route.push("/");
      },
      onError: (err) => {
        toast.error(err.message || "Somethin went wrong. Please try again");
      },
    });
  };
  const handleResendOtp = () => {    
    resendOtp(
      { email },
      {
        onSuccess: () => {
          toast.success("A new verification code has been sent.");
          setOtp("");
        },
        onError: (error) => {
          toast.error(error.message || "Failed to resend verification code.");
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-center">
        <InputOTP
          maxLength={6}
          value={otp}
          name="otp"
          id="otp"
          onChange={setOtp}
          pattern={REGEXP_ONLY_DIGITS}
          disabled={isPending}
          autoFocus
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <Button
        type="submit"
        disabled={otp.length !== 6 || isPending}
        className="h-11 w-full"
      >
        {isPending ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Verifying...
          </>
        ) : (
          "Verify account"
        )}
      </Button>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Didn&apos;t receive the code?
        </p>

        <button
          onClick={handleResendOtp}
          disabled={isResending}
          type="button"
          className="mt-1 text-sm font-medium text-primary hover:underline"
        >
          Resend code
        </button>
      </div>
    </form>
  );
}
