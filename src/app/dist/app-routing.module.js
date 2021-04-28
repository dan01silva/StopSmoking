"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    {
        path: '',
        redirectTo: 'bemvindo',
        pathMatch: 'full'
    },
    {
        path: 'form01',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./form01/form01.module'); }).then(function (m) { return m.Form01PageModule; }); }
    },
    {
        path: 'form02',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./form02/form02.module'); }).then(function (m) { return m.Form02PageModule; }); }
    },
    {
        path: 'homeperfil',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./home-perfil/home-perfil.module'); }).then(function (m) { return m.HomePerfilPageModule; }); }
    },
    {
        path: 'bemvindo',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./bem-vindo/bem-vindo.module'); }).then(function (m) { return m.BemVindoPageModule; }); }
    },
    {
        path: 'depoimentos',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./depoimentos/depoimentos.module'); }).then(function (m) { return m.DepoimentosPageModule; }); }
    },
    {
        path: 'dicas-saude',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./dicas-saude/dicas-saude.module'); }).then(function (m) { return m.DicasSaudePageModule; }); }
    },
    {
        path: 'conquistas',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./conquistas/conquistas.module'); }).then(function (m) { return m.ConquistasPageModule; }); }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
