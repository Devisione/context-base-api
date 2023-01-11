import React, { memo, useContext } from "react";
import { GlobalContext } from "../Stores/Messages";

export const ContextExample = memo(() => {
  const { notifications, updateNotifications } = useContext(GlobalContext);

  return (
    <div>
      Context
      <div>{notifications.length}</div>
      <button
        onClick={() =>
          updateNotifications((prev: any) => [...prev, new Date().toString()])
        }
      >
        Увеличить
      </button>
    </div>
  );
});

export const ContextExampleUser = memo(() => {
  const {
    user: { name },
  } = useContext(GlobalContext);
  return <div style={{ marginBottom: "24px" }}>{name}</div>;
});
