import { getMe, googleOAuth, resendVerificationOtp, userLogin, userLogout, userRegister, verifyAccount } from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useRegister() {
  return useMutation({
    mutationFn: userRegister,
  });
}
export function useVerifyAccount() {
  return useMutation({
    mutationFn: verifyAccount,
  });
}

export function useResendVerificationOtp() {
  return useMutation({
    mutationFn: resendVerificationOtp,
  });
}
export function useLogin() {
  return useMutation({
    mutationFn: userLogin,
  });
}
export function useLogout() {
  return useMutation({
    mutationFn: userLogout,
  });
}
export function useGoogleOAuth() {
  return useMutation({
    mutationFn: googleOAuth,
  });
}
export function useCurrentUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: getMe,
    retry: false,
  });
}
