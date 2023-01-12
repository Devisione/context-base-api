import React, { Context, createContext, FC, PropsWithChildren } from "react";
import { connectContext } from "./connectContext";
import { ContextValues } from "./types";

export interface Store<State, Actions> {
  state: State;
  actions: Actions;
}

export const createStore = function <
  State,
  Actions,
  ContextItems extends Context<any>[],
  ComponentProps
>(
  useCustomHook: (params: ComponentProps) => Store<State, Actions>,
  Contexts?: [...ContextItems],
  getValueByKey?: (values: ContextValues<ContextItems>) => ComponentProps
) {
  const Context = createContext({} as { actions: Actions; state: State });

  const useStore = (
    hook: (data?: any) => { actions: Actions; state: State },
    params: ComponentProps
  ) => {
    return hook(params);
  };

  const Provider: FC<PropsWithChildren> = connectContext(
    Contexts || ([] as any),
    getValueByKey
  )<PropsWithChildren>(({ children, ...params }) => {
    // @ts-ignore
    const { state, actions = {} as Actions } = useStore(useCustomHook, params);

    return (
      <Context.Provider value={{ state, actions }}>{children}</Context.Provider>
    );
  });

  return { Provider, Context: Context };
};
