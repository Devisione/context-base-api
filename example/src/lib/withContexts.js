import { __assign } from "tslib";
import React from "react";
var RecursiveContent = function (_a) {
    var Components = _a.Components, children = _a.children;
    var Component = Components[0];
    return (React.createElement(Component, null, Components.length > 1 ? (React.createElement(RecursiveContent, { Components: Components.filter(function (_, index) { return index > 0; }) }, children)) : (children)));
};
export var withContexts = function (Component, contexts) {
    // eslint-disable-next-line react/display-name
    return function (props) {
        return (React.createElement(RecursiveContent, { Components: contexts || [] }, 
        // @ts-ignore
        React.createElement(Component, __assign({}, props))));
    };
};
//# sourceMappingURL=withContexts.js.map