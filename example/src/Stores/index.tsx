import React from "react";
import { connectContext } from "../lib";
import { GlobalStore } from "./Global";

export const StoreExample = connectContext(
  [GlobalStore.Context],
  ([
    {
      state: { notifications },
      actions: { updateNotifications },
    },
  ]) => ({
    globalNotifications: notifications,
    updateGlobalNotifications: updateNotifications,
  })
)<{ minDate: string }>(
  ({ globalNotifications, updateGlobalNotifications, minDate }) => {
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
  }
);

export const StoreExampleUser = connectContext(
  [GlobalStore.Context],
  ([
    {
      state: {
        user: { name },
      },
    },
  ]) => ({ userName: name })
)(({ userName }) => {
  return <div style={{ marginBottom: "24px" }}>{userName}</div>;
});
