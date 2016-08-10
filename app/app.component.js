"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var step_4_component_1 = require('./step4/step-4.component');
var step_3_component_1 = require('./step4/step3/step-3.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " <h1>hi this is my notes in training</h1>\n  <p>this is a test learning and mastering angular2 before starting the project candy crush like game</p>\n  <br>\n  <h3> 1st step testing and learning on components in angular 2</h3>\n  <h3> 2nd step building or setting up development environment</h3>\n \n  <p> in setting up just follow the step setup on angular2 website</p>\n  <br>\n  <step-3></step-3>\n        <br>       \n<step-4></step-4>\n\n  ",
            directives: [step_4_component_1.step4Component, step_3_component_1.step3Component]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map