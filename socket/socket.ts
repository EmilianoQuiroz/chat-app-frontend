import { API_URL } from "@/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export async function connectSocket(): Promise<Socket> {
  const token = await AsyncStorage.getItem("token");
  if (!token) {
    throw new Error("No token found in AsyncStorage");
  }
  if (!socket) {
    socket = io(API_URL, {
      auth: { token },
    });
    // wait for connection to be established
    await new Promise((resolve) => {
      socket?.on("connect", () => {
        console.log("Socket connected", socket?.id);
        resolve(true);
      });
    });
    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });
  }
  return socket;
}

export function getSocket(): Socket | null {
  return socket;
}

export function disconnectSocket(): void {
  if (socket) {
    socket.disconnect();
    socket = null;
    console.log("Socket disconnected manually");
  } else {
    console.log("No socket to disconnect");
  }
}