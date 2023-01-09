import { __assign, __extends } from "tslib";
import React, { memo, PureComponent } from "react";
export var connectContext = function (Context, getValueByKey) {
    // eslint-disable-next-line react/display-name
    return function (Component) {
        var MemoComponent = memo(function (props) {
            // @ts-ignore
            return React.createElement(Component, __assign({}, props));
        });
        // @ts-ignore
        var WrapperComponent = /** @class */ (function (_super) {
            __extends(WrapperComponent, _super);
            function WrapperComponent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WrapperComponent.prototype.render = function () {
                var _this = this;
                return (React.createElement(Context.Consumer, null, function (values // @ts-ignore
                ) {
                    return (React.createElement(MemoComponent, __assign({}, _this.props, getValueByKey(values))));
                }));
            };
            return WrapperComponent;
        }(PureComponent));
        return WrapperComponent;
    };
};
//# sourceMappingURL=connectContext.js.map