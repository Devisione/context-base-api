import React, { createContext, FC, PropsWithChildren } from "react";
export const createStore = function <State, Actions>(
  useCustomHook: () => { state: State; actions: Actions }
) {
  const Context = createContext({} as { actions: Actions; state: State });

  const useStore = (
    hook: (data?: any) => { actions: Actions; state: State },
    params?: any
  ) => {
    return hook(params);
  };

  const Provider: FC<PropsWithChildren> = ({ children }) => {
    // @ts-ignore
    const { state, actions = {} as Actions } = useStore(useCustomHook);

    return (
      <Context.Provider value={{ state, actions }}>{children}</Context.Provider>
    );
  };

  return { Provider, Context: Context };
};
