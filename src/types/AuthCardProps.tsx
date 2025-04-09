export interface AuthCardProps {}

import { FormEvent } from "react";

export interface AuthCardProps {
  isRegister?: boolean;
  email: string;
  setEmail: (value: string) => void;
  username?: string;
  setUsername?: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  confirmPassword?: string;
  setConfirmPassword?: (value: string) => void;
  error?: string | null;
  handleSubmit: (e: FormEvent) => void;
}
