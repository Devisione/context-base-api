import React, { createContext, FC, PropsWithChildren } from "react";
export const createStore = function <State, Actions>(
  useCustomHook: () => { state: State; actions?: Actions }
) {
  const Context = createContext({} as { actions?: Actions; state: State });

  const useBlabla = (
    hook: (data?: any) => { actions?: Actions; state: State },
    params?: any
  ) => {
    return hook(params);
  };

  const Provider: FC<PropsWithChildren> = ({ children }) => {
    const { state, actions } = useBlabla(useCustomHook);

    return (
      <Context.Provider value={{ state, actions }}>{children}</Context.Provider>
    );
  };

  return { Provider, Context: Context };
};
