"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Form02Page = void 0;
var core_1 = require("@angular/core");
var Form02Page = /** @class */ (function () {
    function Form02Page() {
        this.user = {
            qtdcigarros: ' ',
            valorcig: '',
            qntdcqntdcigarrogmaacoigma: ''
        };
    }
    Form02Page.prototype.ngOnInit = function () {
    };
    Form02Page.prototype.savecig = function () {
        this.user.qtdcigarros = this.qtdcigarros;
    };
    Form02Page.prototype.savevalcig = function () {
        this.user.valorcig = this.valorcig;
    };
    Form02Page.prototype.saveqntdcig = function () {
        this.user.qntdcqntdcigarrogmaacoigma = this.qntdcigma;
    };
    Form02Page.prototype.printLog = function () {
        console.log(this.user);
    };
    Form02Page = __decorate([
        core_1.Component({
            selector: 'app-form02',
            templateUrl: './form02.page.html',
            styleUrls: ['./form02.page.scss']
        })
    ], Form02Page);
    return Form02Page;
}());
exports.Form02Page = Form02Page;
