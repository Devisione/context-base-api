import React, { Context, FC, memo, PureComponent } from "react";
import { ContextValues } from "./types";

export const connectContext = function <
  ContextItems extends Context<any>[],
  ComponentProps
>(
  initialContexts: [...ContextItems],
  getValueByKey?: (values: ContextValues<ContextItems>) => ComponentProps
) {
  return function <ComponentExtends = {}>(
    Component: FC<ComponentProps & ComponentExtends>
  ) {
    const MemoComponent = memo((props) => {
      // @ts-ignore
      return <Component {...props} />;
    });

    // @ts-ignore
    class RecursiveComponent extends PureComponent<{
      Contexts: Context<any>[];
      contextValues?: ContextValues<ContextItems>;
    }> {
      render() {
        const {
          Contexts,
          contextValues = [] as ContextValues<ContextItems>,
          ...componentProps
        } = this.props;
        const CurrentContext = Contexts[0];
        const NextContexts = Contexts.filter((_, index) => index !== 0);

        if (!CurrentContext) return <MemoComponent {...componentProps} />;

        return (
          <CurrentContext.Consumer>
            {(state) =>
              NextContexts.length ? (
                <RecursiveComponent
                  Contexts={NextContexts}
                  // @ts-ignore
                  contextValues={contextValues.concat([state])}
                  {...componentProps}
                />
              ) : (
                // @ts-ignore
                <MemoComponent
                  {...(getValueByKey
                    ? // @ts-ignore
                      getValueByKey(contextValues.concat([state]))
                    : {})}
                  {...componentProps}
                />
              )
            }
          </CurrentContext.Consumer>
        );
      }
    }

    return (props: ComponentProps & ComponentExtends) => (
      <RecursiveComponent Contexts={initialContexts} {...props} />
    );
  };
};
