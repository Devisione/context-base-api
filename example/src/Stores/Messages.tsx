import { createContext, PropsWithChildren, useState } from "react";

export const GlobalContext = createContext({
  user: { name: "" },
  notifications: [],
  updateNotifications: () => {},
} as any);

export const GlobalContextProvider: React.FC<PropsWithChildren<any>> = ({
  children,
}) => {
  const [notifications, updateNotifications] = useState<string[]>([]);
  const [user] = useState({ name: "Vladislav" });

  return (
    <GlobalContext.Provider
      value={{ notifications, user, updateNotifications }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
