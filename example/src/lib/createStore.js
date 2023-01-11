import React, { createContext } from "react";
export var createStore = function (useCustomHook) {
    var Context = createContext({});
    var useStore = function (hook, params) {
        return hook(params);
    };
    var Provider = function (_a) {
        var children = _a.children;
        // @ts-ignore
        var _b = useStore(useCustomHook), state = _b.state, _c = _b.actions, actions = _c === void 0 ? {} : _c;
        return (React.createElement(Context.Provider, { value: { state: state, actions: actions } }, children));
    };
    return { Provider: Provider, Context: Context };
};
//# sourceMappingURL=createStore.js.map