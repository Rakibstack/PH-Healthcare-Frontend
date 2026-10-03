"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { toast } from "sonner";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useResendVerificationOtp, useVerifyAccount } from "@/hooks";
import { useVerifyDoctorAccount } from "@/hooks/doctor.hooks";

const RESEND_COOLDOWN = 120;

const formatTimer = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

export default function VerifyAccountForm({
  mode,
}: {
  mode: "doctor" | "patient";
}) {
  const [otp, setOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(RESEND_COOLDOWN);

  const searchParams = useSearchParams();
  const router = useRouter();

  const email = searchParams.get("email") || "";

  const { mutate: verifyPatientAccount, isPending } = useVerifyAccount();
  const { mutate: verifyDoctorAccount } = useVerifyDoctorAccount();
  const verifyAccount =
    mode === "doctor" ? verifyDoctorAccount : verifyPatientAccount;
  const { mutate: resendOtp, isPending: isResending } =
    useResendVerificationOtp();

  // Redirect if email is missing
  useEffect(() => {
    if (!email) {
      router.replace("/login");
    }
  }, [email, router]);

  // Resend countdown
  useEffect(() => {
    if (resendTimer <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setResendTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [resendTimer]);

  // Verify OTP
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (otp.length !== 6) {
      toast.error("Please enter the 6-digit verification code.");
      return;
    }

    const verifyData = {
      email,
      otp,
    };

    verifyAccount(verifyData, {
      onSuccess: () => {
        if (mode === "doctor") {
          toast.success(
            "Your doctor account has been verified successfully. wait for the admin approval.",
          );
          router.push("/");

          return;
        }
        toast.success("Your account has been verified successfully.");
        router.push("/");
      },

      onError: (err) => {
        toast.error(err.message || "Something went wrong. Please try again.");
      },
    });
  };

  const handleResendOtp = () => {
    if (!email) {
      toast.error("Email address is missing.");
      return;
    }

    if (resendTimer > 0 || isResending) {
      return;
    }
    resendOtp(
      { email },
      {
        onSuccess: () => {
          toast.success("A new verification code has been sent.");
          setOtp("");
          setResendTimer(RESEND_COOLDOWN);
        },
        onError: (error) => {
          toast.error(error.message || "Failed to resend verification code.");
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* OTP Input */}
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

      {/* Verify Button */}
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

      {/* Resend OTP */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Didn&apos;t receive the code?
        </p>

        <button
          type="button"
          onClick={handleResendOtp}
          disabled={resendTimer > 0 || isResending}
          className="mt-1 text-sm font-medium text-primary transition-colors hover:underline disabled:cursor-not-allowed disabled:text-muted-foreground disabled:no-underline"
        >
          {isResending
            ? "Sending..."
            : resendTimer > 0
              ? `Resend code in ${formatTimer(resendTimer)}`
              : "Resend code"}
        </button>
      </div>
    </form>
  );
}
