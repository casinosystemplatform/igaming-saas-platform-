import { createContext, useState } from "react";

export const WalletContext = createContext();

export function WalletProvider({ children }) {
  const [balance, setBalance] = useState(0);

  return (
    <WalletContext.Provider value={{ balance, setBalance }}>
      {children}
    </WalletContext.Provider>
  );
}
