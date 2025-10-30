import { getSocket } from "./socket";

export const testSocket = (payload: any, off: boolean = false) => {
  const socket = getSocket();
  if (!socket) {
    console.log("No socket connection available");
    return;
  }
  if (off) {
    socket.off("testEvent", payload);
    console.log("Listener for 'testEvent' removed");
  } else if (typeof payload === "function") {
    socket.on("testEvent", payload);
    console.log("Listener for 'testEvent' added");
  }
};
