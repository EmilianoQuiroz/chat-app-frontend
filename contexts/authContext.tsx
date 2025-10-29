import { login, register } from "@/services/authService";
import { AuthContextProps, DecodedTokenProps } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { jwtDecode } from "jwt-decode";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export const AuthContext = createContext<AuthContextProps>({
  token: null,
  user: null,
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
  updateToken: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    loadToken();
  }, []);
  const loadToken = async () => {
    const storedToken = await AsyncStorage.getItem("token");
    if (storedToken) {
      try {
        const decoded = jwtDecode<DecodedTokenProps>(storedToken);
        if (decoded.exp && decoded.exp < Date.now() / 1000) {
          await AsyncStorage.removeItem("token");
          gotoWelcomePage();
          return;
        }
        setToken(storedToken);
        setUser(decoded.user);
        goToHomePage();
      } catch (error) {
        gotoWelcomePage();
        console.log("Error decoding token:", error);
      }
    } else {
      gotoWelcomePage();
    }
  };

  const goToHomePage = () => {
    setTimeout(() => {
      router.replace("/(main)/home/page");
    }, 1500);
  };

  const gotoWelcomePage = () => {
    setTimeout(() => {
      router.replace("/(auth)/welcome/page");
    }, 1500);
  };

  const updateToken = async (token: string) => {
    if (token) {
      setToken(token);
      await AsyncStorage.setItem("token", token);
      // decode token (user)
      const decoded = jwtDecode<DecodedTokenProps>(token);
      console.log("Decoded token:", decoded);
      setUser(decoded.user);
    }
  };

  const signIn = async (email: string, password: string) => {
    const response = await login(email, password);
    await updateToken(response.token);
    router.replace("/(main)/home/page");
  };

  const signUp = async (
    email: string,
    password: string,
    name: string,
    avatar?: string | null
  ) => {
    // Registration logic will go here
    const response = await register(email, password, name, avatar);
    await updateToken(response.token);
    router.replace("/(main)/home/page");
  };

  const signOut = async () => {
    setToken(null);
    setUser(null);
    await AsyncStorage.removeItem("token");
    router.replace("/(auth)/welcome/page");
  };

  return (
    <AuthContext.Provider
      value={{ token, user, signIn, signUp, signOut, updateToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
