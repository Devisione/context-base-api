import React, { Context, FC, PureComponent } from "react";

export const connectContext = function <T, D>(
  Context: Context<T>,
  getValueByKey: (value: T) => D
) {
  // eslint-disable-next-line react/display-name
  return (Component: FC<D>) => {
    // @ts-ignore
    class WrapperComponent extends PureComponent {
      render() {
        return (
          <Context.Consumer>
            {(
              values // @ts-ignore
            ) => <Component {...getValueByKey(values)} />}
          </Context.Consumer>
        );
      }
    }

    return WrapperComponent;
  };
};
