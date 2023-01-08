import React, { memo } from "react";
import { connectContext } from "context-base-api";
import { GlobalStore } from "./Global";

export const StoreExample = connectContext(
  GlobalStore.Context,
  // @ts-ignore
  ({ state: { notifications }, actions: { updateNotifications } }) => ({
    globalNotifications: notifications,
    updateGlobalNotifications: updateNotifications,
  })
)(
  memo(({ globalNotifications, updateGlobalNotifications }) => {
    return (
      <div>
        Global
        <div>{globalNotifications.length}</div>
        <button
          onClick={() =>
            updateGlobalNotifications((prev: any) => [
              ...prev,
              new Date().toString(),
            ])
          }
        >
          Увеличить
        </button>
      </div>
    );
  })
);

export const StoreExampleUser = connectContext(
  GlobalStore.Context,
  // @ts-ignore
  ({
    state: {
      user: { name },
    },
  }) => ({ userName: name })
)(
  memo(({ userName }) => {
    return <div style={{ marginBottom: "24px" }}>{userName}</div>;
  })
);
