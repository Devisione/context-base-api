import { useState } from "react";
// @ts-ignore
import { createStore } from "context-base-api";

export const GlobalStore = createStore(() => {
  const [notifications] = useState([]);

  return { state: { notifications } };
});
