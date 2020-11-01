"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Individu = void 0;
var client_1 = require("./client");
/**
 * @Author Zi Yu Chen
 * matricule: 16822559
 * Github user: IglooSyrup
 */
var Individu = /** @class */ (function (_super) {
    __extends(Individu, _super);
    function Individu() {
        var _this = _super.call(this) || this;
        _this.prenom = undefined;
        _this.nom = undefined;
        _this.email = undefined;
        return _this;
    }
    return Individu;
}(client_1.Client));
exports.Individu = Individu;
