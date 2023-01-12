import { __rest } from "tslib";
import React, { createContext } from "react";
import { connectContext } from "./connectContext";
export var createStore = function (useCustomHook, Contexts, getValueByKey) {
    var Context = createContext({});
    var useStore = function (hook, params) {
        return hook(params);
    };
    var Provider = connectContext(Contexts || [], getValueByKey)(function (_a) {
        var children = _a.children, params = __rest(_a, ["children"]);
        // @ts-ignore
        var _b = useStore(useCustomHook, params), state = _b.state, _c = _b.actions, actions = _c === void 0 ? {} : _c;
        return (React.createElement(Context.Provider, { value: { state: state, actions: actions } }, children));
    });
    return { Provider: Provider, Context: Context };
};
//# sourceMappingURL=createStore.js.map