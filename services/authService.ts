import { API_URL } from "@/constants";
import axios from "axios";

export const login = async (
  email: string,
  password: string
): Promise<{ token: string }> => {
  try {
    console.log(`🌐 Attempting login to: ${API_URL}/auth/login`);
    console.log(`📧 Email: ${email}`);

    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });

    console.log("✅ Login successful:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("❌ Login error details:", {
      message: error.message,
      code: error.code,
      response: error.response?.data,
      status: error.response?.status,
      config: {
        url: error.config?.url,
        method: error.config?.method,
      },
    });

    // Mejor manejo de errores específicos
    if (error.code === "NETWORK_ERROR" || error.message === "Network Error") {
      throw new Error(
        "Cannot connect to server. Please check your internet connection and try again."
      );
    }

    if (error.response?.status === 401) {
      throw new Error("Invalid email or password.");
    }

    if (error.response?.status === 404) {
      throw new Error("User not found. Please check your email.");
    }

    const msg =
      error.response?.data?.message || "An error occurred during login.";
    throw new Error(msg);
  }
};

export const register = async (
  email: string,
  password: string,
  name: string,
  avatar?: string | null
): Promise<{ token: string }> => {
  try {
    console.log(`🌐 Attempting registration to: ${API_URL}/auth/register`);
    console.log(`📧 Email: ${email}, 👤 Name: ${name}`);

    const response = await axios.post(`${API_URL}/auth/register`, {
      email,
      password,
      name,
      avatar,
    });

    console.log("✅ Registration successful:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("❌ Registration error details:", {
      message: error.message,
      code: error.code,
      response: error.response?.data,
      status: error.response?.status,
      config: {
        url: error.config?.url,
        method: error.config?.method,
      },
    });

    // Mejor manejo de errores específicos
    if (error.code === "NETWORK_ERROR" || error.message === "Network Error") {
      throw new Error(
        "Cannot connect to server. Please check your internet connection and try again."
      );
    }

    if (error.response?.status === 400) {
      throw new Error(
        error.response.data?.message || "Invalid registration data."
      );
    }

    if (error.response?.status === 409) {
      throw new Error("Email already exists. Please use a different email.");
    }

    const msg =
      error.response?.data?.message || "An error occurred during registration.";
    throw new Error(msg);
  }
};
