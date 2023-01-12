import { Context } from "react";
export type ContextValues<TContexts> = {
    [K in keyof TContexts]: TContexts[K] extends Context<infer T> ? T : never;
};
