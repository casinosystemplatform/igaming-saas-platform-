import { useEffect, useState } from "react";
import socket from "../../sockets/socket";

export default function CrashGame() {
  const [multiplier, setMultiplier] = useState(1);

  useEffect(() => {
    socket.on("crash:tick", setMultiplier);
    return () => socket.off("crash:tick");
  }, []);

  return (
    <div>
      <h1>🚀 {multiplier}x</h1>
    </div>
  );
}
