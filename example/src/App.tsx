import React from "react";
import { withContexts } from "./lib";
import { GlobalContextProvider } from "./Stores/Messages";
import { GlobalStore } from "./Stores/Global";
import { StoreExample, StoreExampleUser } from "./Stores";
import { ContextExample, ContextExampleUser } from "./Context";

const Page = () => {
  return (
    <>
      <StoreExample minDate={"qwef"} />
      <StoreExampleUser />
      <ContextExample />
      <ContextExampleUser />
    </>
  );
};

// @ts-ignore
export default withContexts(Page, [
  GlobalContextProvider,
  GlobalStore.Provider,
]);
