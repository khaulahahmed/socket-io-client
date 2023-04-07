import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:3000";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    // Listen for messages from the server
    socket.on("message", (data) => {
      setMessage(data);
    });

    // Emit a message to the server
    socket.emit("message", "Hello from client");

    return () => socket.disconnect();
  }, []);

  return (
    <div>
      <p>Message from server: {message}</p>
    </div>
  );
}

export default App;
