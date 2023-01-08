import { useState } from "react";
// @ts-ignore
import { createStore } from "context-base-api";

export const MessagesStore = createStore(() => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>();

  const loadingItems = () => {
    setLoading(true);
    (() => {
      setData([]);
    })();
    setLoading(false);
  };

  return {
    state: { messages: { isLoading: loading, items: data } },
    actions: { loadingItems },
  };
});
