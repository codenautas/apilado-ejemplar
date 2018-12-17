"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var apilado_1 = require("apilado");
exports.Constructor = apilado_1.Constructor;
function emergeAppExample(Base) {
    return /** @class */ (function (_super) {
        __extends(AppExample, _super);
        function AppExample() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.call(this, args) || this;
            _this.rolesTD = {
                field: {
                    rol: { typeName: 'text' }
                },
                primaryKey: ['rol']
            };
            _this.usuariosTD.field.rol = { typeName: 'text' };
            return _this;
        }
        return AppExample;
    }(Base));
}
exports.emergeAppExample = emergeAppExample;
var AppExample = /** @class */ (function (_super) {
    __extends(AppExample, _super);
    function AppExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AppExample;
}(emergeAppExample(apilado_1.AppApilado)));
exports.AppExample = AppExample;
