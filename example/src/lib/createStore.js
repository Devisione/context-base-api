import React, { createContext } from "react";
export var createStore = function (useCustomHook) {
    var Context = createContext({});
    var useBlabla = function (hook, params) {
        return hook(params);
    };
    var Provider = function (_a) {
        var children = _a.children;
        var _b = useBlabla(useCustomHook), state = _b.state, actions = _b.actions;
        return (React.createElement(Context.Provider, { value: { state: state, actions: actions } }, children));
    };
    return { Provider: Provider, Context: Context };
};
//# sourceMappingURL=createStore.js.map