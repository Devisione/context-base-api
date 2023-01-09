import React, { FC } from "react";
export declare const connectContext: <ContextValue, ComponentProps>(Context: React.Context<ContextValue>, getValueByKey: (value: ContextValue) => ComponentProps) => <ComponentExtends = {}>(Component: React.FC<ComponentProps & ComponentExtends>) => {
    new (props: ComponentExtends | Readonly<ComponentExtends>): {
        render(): JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<ComponentExtends>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<ComponentExtends>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<ComponentExtends>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<ComponentExtends>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<ComponentExtends>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<ComponentExtends>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<ComponentExtends>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<ComponentExtends>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<ComponentExtends>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: ComponentExtends, context: any): {
        render(): JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<ComponentExtends>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<ComponentExtends>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<ComponentExtends>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<ComponentExtends>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<ComponentExtends>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<ComponentExtends>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<ComponentExtends>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<ComponentExtends>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<ComponentExtends>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
