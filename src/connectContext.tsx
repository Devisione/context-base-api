import React, { Context, FC, PureComponent } from "react";

export const connectContext = function <ContextValue, ComponentProps>(
  Context: Context<ContextValue>,
  getValueByKey: (value: ContextValue) => ComponentProps
) {
  // eslint-disable-next-line react/display-name
  return function <ComponentExtends>(
    Component: FC<ComponentProps & ComponentExtends>
  ) {
    // @ts-ignore
    class WrapperComponent extends PureComponent<ComponentExtends> {
      render() {
        return (
          <Context.Consumer>
            {(
              values // @ts-ignore
            ) => <Component {...this.props} {...getValueByKey(values)} />}
          </Context.Consumer>
        );
      }
    }

    return WrapperComponent;
  };
};
