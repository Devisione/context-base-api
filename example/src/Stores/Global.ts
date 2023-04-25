import { useState } from "react";
import { createStore } from "../lib";

export const GlobalStore = createStore(() => {
  const [notifications, updateNotifications] = useState<string[]>([]);
  const [user] = useState({ name: "Grigoriy" });

  return { state: { notifications, user }, actions: { updateNotifications } };
});

export const CustomStore = createStore(
  ({ notifications }: { notifications: string[] }) => {
    console.log(notifications);
    return { actions: {}, state: {} };
  },
  [GlobalStore.Context],
  ([
    {
      state: { notifications },
    },
  ]) => ({ notifications })
);
