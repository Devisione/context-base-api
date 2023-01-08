import React from "react";
// @ts-ignore
import { connectContext, withContexts } from "context-base-api";
import { MessagesStore } from "./Stores/Messages";
import { GlobalStore } from "./Stores/Global";

const Page = connectContext(
  MessagesStore.Context,
  ({
    state: {
      messages: { isLoading },
    },
  }) => ({ isLoading })
)(({ isLoading }) => {
  return <div>{isLoading.toString()}</div>;
});

// @ts-ignore
export default withContexts(Page, [
  MessagesStore.Provider,
  GlobalStore.Provider,
]);
