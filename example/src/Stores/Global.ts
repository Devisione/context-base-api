import { useState } from "react";
import { createStore } from "context-base-api";

export const GlobalStore = createStore(() => {
  const [notifications, updateNotifications] = useState<string[]>([]);
  const [user] = useState({ name: "Grigoriy" });

  return { state: { notifications, user }, actions: { updateNotifications } };
});
