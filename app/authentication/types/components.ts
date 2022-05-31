import { tStep } from "./screens";
export interface IAuthInputProps {
  error: string;
  name: string;
  setError: (value: string) => void;
  otpError: string;
  setName: (value: string) => void;
  setStep: any;
  step: tStep;
  setShow: (value: boolean) => void;
  phone: string;
  setPhone: (value: string) => void;
  genCode: string;
  setGenCode: (value: string) => void;
}
export interface IAuthButtonProps {
  error: string;
  phone: string;
  name: string;
  setName: (value: string) => void;
  step: tStep;
  onRegisterPress: () => Promise<void>;
  onLoginPress: () => Promise<void>;
  setStep?: any;
}
export interface IAuthTitleProps {
  step: tStep;
}
