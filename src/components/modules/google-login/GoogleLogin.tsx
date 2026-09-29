"use client"
import { useGoogleOAuth } from "@/hooks";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { GoogleLogin } from "@react-oauth/google";


export default function GoogleLoginComponent() {
  const { mutate: googleLogin } = useGoogleOAuth();
  const router = useRouter();

  const handleGoogleSuccess = (credentialResponse: { credential?: string }) => {
    const idToken = credentialResponse.credential;
    if (!idToken) {
      toast.error("Google OAuth Failed");
      return;
    }
    googleLogin(
      { idToken },
      {
        onSuccess: () => {
          toast.success("Google Login Successfully");
          router.push("/");
        },
        onError: (err) => {
          toast.error(err.message || "Somethin Went Wrong. Please Try Again");
        },
      },
    );
  };
  const handleGoogleFailed = () => {
    toast.error("Something Went Wrong Please Try Again.");
  };

  return (
    <GoogleLogin
      theme="outline"
      shape="pill"
      text="continue_with"
      onSuccess={handleGoogleSuccess}
      onError={handleGoogleFailed}
    ></GoogleLogin>
  );
}
