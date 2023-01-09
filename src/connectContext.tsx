import React, { Context, FC, memo, PureComponent } from "react";

export const connectContext = function <ContextValue, ComponentProps>(
  Context: Context<ContextValue>,
  getValueByKey: (value: ContextValue) => ComponentProps
) {
  // eslint-disable-next-line react/display-name
  return function <ComponentExtends = {}>(
    Component: FC<ComponentProps & ComponentExtends>
  ) {
    const MemoComponent = memo((props) => {
      // @ts-ignore
      return <Component {...props} />;
    });

    // @ts-ignore
    class WrapperComponent extends PureComponent<ComponentExtends> {
      render() {
        return (
          <Context.Consumer>
            {(
              values // @ts-ignore
            ) => {
              return (
                <MemoComponent {...this.props} {...getValueByKey(values)} />
              );
            }}
          </Context.Consumer>
        );
      }
    }

    return WrapperComponent;
  };
};
