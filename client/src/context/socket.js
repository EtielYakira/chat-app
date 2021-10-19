import { io } from "socket.io-client";

const PORT = process.env.PORT || "http://localhost:8000";
const socket = io(PORT, { autoConnect: false });

export default socket;