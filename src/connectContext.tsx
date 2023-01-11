import React, { Context, FC, memo, PureComponent } from "react";

type ContextValues<TContexts extends Context<any>[]> = {
  [K in keyof TContexts]: TContexts[K] extends Context<infer T> ? T : never;
};

export const connectContext = function <
  ContextList extends Context<any>[],
  ComponentProps
>(
  initialContexts: ContextList,
  getValueByKey: (value: ContextValues<ContextList>) => ComponentProps
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
      contextValues?: ContextValues<ContextList>;
    }> {
      render() {
        const {
          Contexts,
          contextValues = [] as ContextValues<ContextList>,
          ...componentProps
        } = this.props;
        const CurrentContext = Contexts[0];
        const NextContexts = Contexts.filter((_, index) => index !== 0);

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
                  // @ts-ignore
                  {...getValueByKey(contextValues.concat([state]))}
                  {...componentProps}
                />
              )
            }
          </CurrentContext.Consumer>
        );
      }
    }

    // TODO: dont know why work without type
    return (props: any) => (
      <RecursiveComponent Contexts={initialContexts} {...props} />
    );
  };
};
