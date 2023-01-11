import React, { Context, FC } from "react";
type ContextValues<TContexts extends Context<any>[]> = {
    [K in keyof TContexts]: TContexts[K] extends Context<infer T> ? T : never;
};
export declare const connectContext: <ContextList extends React.Context<any>[], ComponentProps>(initialContexts: ContextList, getValueByKey: (value: ContextValues<ContextList>) => ComponentProps) => <ComponentExtends = {}>(Component: React.FC<ComponentProps & ComponentExtends>) => (props: any) => JSX.Element;
export {};
