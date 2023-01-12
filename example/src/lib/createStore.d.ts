import React from "react";
import { ContextValues } from "./types";
export interface Store<State, Actions> {
    state: State;
    actions: Actions;
}
export declare const createStore: <State, Actions, ContextItems extends React.Context<any>[], ComponentProps>(useCustomHook: (params: ComponentProps) => Store<State, Actions>, Contexts?: [...ContextItems] | undefined, getValueByKey?: ((values: ContextValues<ContextItems>) => ComponentProps) | undefined) => {
    Provider: React.FC<{
        children?: React.ReactNode;
    }>;
    Context: React.Context<{
        actions: Actions;
        state: State;
    }>;
};
