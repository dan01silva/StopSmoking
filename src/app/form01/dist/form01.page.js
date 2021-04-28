"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Form01Page = void 0;
var core_1 = require("@angular/core");
var Form01Page = /** @class */ (function () {
    function Form01Page() {
        this.today = new Date();
        this.year = this.today.getFullYear();
        this.user = {
            cidade: '',
            dataNasc: '',
            genero: ''
        };
    }
    Form01Page.prototype.ngOnInit = function () {
    };
    Form01Page.prototype.saveidade = function () {
        this.user.dataNasc = this.dataNasc;
    };
    Form01Page.prototype.savegen = function () {
        this.user.genero = this.genuser;
    };
    Form01Page.prototype.savecity = function () {
        this.user.cidade = this.cityuser;
    };
    Form01Page.prototype.printLog = function () {
        console.log(this.user);
    };
    Form01Page = __decorate([
        core_1.Component({
            selector: 'app-form01',
            templateUrl: './form01.page.html',
            styleUrls: ['./form01.page.scss']
        })
    ], Form01Page);
    return Form01Page;
}());
exports.Form01Page = Form01Page;
