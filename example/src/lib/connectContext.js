import { __assign, __extends, __rest } from "tslib";
import React, { memo, PureComponent } from "react";
export var connectContext = function (initialContexts, getValueByKey) {
    return function (Component) {
        var MemoComponent = memo(function (props) {
            // @ts-ignore
            return React.createElement(Component, __assign({}, props));
        });
        // @ts-ignore
        var RecursiveComponent = /** @class */ (function (_super) {
            __extends(RecursiveComponent, _super);
            function RecursiveComponent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RecursiveComponent.prototype.render = function () {
                var _a = this.props, Contexts = _a.Contexts, _b = _a.contextValues, contextValues = _b === void 0 ? [] : _b, componentProps = __rest(_a, ["Contexts", "contextValues"]);
                var CurrentContext = Contexts[0];
                var NextContexts = Contexts.filter(function (_, index) { return index !== 0; });
                return (React.createElement(CurrentContext.Consumer, null, function (state) {
                    return NextContexts.length ? (React.createElement(RecursiveComponent, __assign({ Contexts: NextContexts, 
                        // @ts-ignore
                        contextValues: contextValues.concat([state]) }, componentProps))) : (
                    // @ts-ignore
                    React.createElement(MemoComponent
                    // @ts-ignore
                    , __assign({}, getValueByKey(contextValues.concat([state])), componentProps)));
                }));
            };
            return RecursiveComponent;
        }(PureComponent));
        // TODO: dont know why work without type
        return function (props) { return (React.createElement(RecursiveComponent, __assign({ Contexts: initialContexts }, props))); };
    };
};
//# sourceMappingURL=connectContext.js.map