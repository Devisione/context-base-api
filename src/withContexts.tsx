import React, { PropsWithChildren } from "react";

const RecursiveContent: React.FC<PropsWithChildren<any>> = ({
  Components,
  children,
}) => {
  const Component = Components[0];

  return (
    <Component>
      {Components.length > 1 ? (
        <RecursiveContent
          Components={Components.filter((_: any, index: number) => index > 0)}
        >
          {children}
        </RecursiveContent>
      ) : (
        children
      )}
    </Component>
  );
};

export const withContexts = function <T>(
  Component: React.ComponentType<T>,
  contexts: React.ComponentType[]
) {
  // eslint-disable-next-line react/display-name
  return (props: T) => {
    return (
      <RecursiveContent Components={contexts || []}>
        {
          // @ts-ignore
          <Component {...props} />
        }
      </RecursiveContent>
    );
  };
};
