import React, { Context, FC, useContext, useMemo } from "react";

// TODO connectContexts
export const connectContext = function <T, D>(
  context: Context<T>,
  getValueByKey: (value: T) => D
) {
  // eslint-disable-next-line react/display-name
  return (Component: FC<D>) => {
    // eslint-disable-next-line react/display-name
    return () => {
      const contextValues = useContext(context);

      const componentProps = useMemo(() => {
        return getValueByKey(contextValues);
      }, [contextValues]);

      // @ts-ignore
      return <Component {...componentProps} />;
    };
  };
};
