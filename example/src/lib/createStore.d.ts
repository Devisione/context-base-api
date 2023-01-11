import React from "react";
export declare const createStore: <State, Actions>(useCustomHook: () => {
    state: State;
    actions: Actions;
}) => {
    Provider: React.FC<{
        children?: React.ReactNode;
    }>;
    Context: React.Context<{
        actions: Actions;
        state: State;
    }>;
};
