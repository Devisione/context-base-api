import React, { FC } from "react";
import { ContextValues } from "./types";
export declare const connectContext: <ContextItems extends React.Context<any>[], ComponentProps>(initialContexts: [...ContextItems], getValueByKey?: ((values: ContextValues<ContextItems>) => ComponentProps) | undefined) => <ComponentExtends = {}>(Component: React.FC<ComponentProps & ComponentExtends>) => (props: any) => JSX.Element;
