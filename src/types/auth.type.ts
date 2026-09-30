export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}
export interface LoginPayload {
  email: string;
  password: string;
}
export interface verifyAccountpayload {
  email: string;
  otp: string;
}
