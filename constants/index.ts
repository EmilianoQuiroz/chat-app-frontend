import { Platform } from "react-native";

// Configuración dinámica para diferentes entornos y dispositivos
const getApiUrl = () => {
  if (__DEV__) {
    // Modo desarrollo
    if (Platform.OS === "android") {
      // Para dispositivo físico Android - IP de tu computadora
      return "http://192.168.1.69:3000";
      
      // Si usas emulador de Android Studio, descomenta la línea siguiente:
      // return "http://10.0.2.2:3000";
    } else {
      // iOS (simulador)
      return "http://localhost:3000";
    }
  } else {
    // Modo producción
    return "https://tu-api-produccion.com";
  }
};

export const API_URL = getApiUrl();

// Para debugging - puedes ver qué URL se está usando
console.log(`🌐 API URL configured: ${getApiUrl()}`);
