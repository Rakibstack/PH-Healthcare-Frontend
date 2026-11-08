import apiClient from "@/lib/apiClient";
import { LoginPayload, RegisterPayload, verifyAccountpayload } from "@/types";

export interface ForgotPasswordPayload {
  email: string;
}

export function userRegister(payload: RegisterPayload) {
  return apiClient("/auth/register", { method: "POST", body: payload });
}
export function verifyAccount(payload: verifyAccountpayload) {
  return apiClient("/auth/verify-email", { method: "POST", body: payload });
}

export function resendVerificationOtp(payload: { email: string }) {
  return apiClient("/auth/resend-verification-otp", {
    method: "POST",
    body: payload,
  });
}
export function userLogin(payload: LoginPayload) {
  return apiClient("/auth/login", { method: "POST", body: payload });
}
export const forgotPassword = (payload: ForgotPasswordPayload) => {
  return apiClient("/auth/forgot-password", {
    method: "POST",
    body: payload,
  });
};
export const resetPassword = (payload: ResetPasswordPayload) => {
  return apiClient("/auth/reset-password", {
    method: "POST",
    body: payload,
  });
};
export function userLogout() {
  return apiClient("/auth/logout", { method: "POST" });
}
export function getMe() {
  return apiClient("/auth/me");
}
export function googleOAuth(payload: { idToken: string }) {
  return apiClient("/auth/google", { method: "POST", body: payload });
}
