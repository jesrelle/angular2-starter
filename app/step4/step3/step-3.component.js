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
var step3Component = (function () {
    function step3Component() {
        //- showing clases of contacts
        this.contact = { firstName: "jes", lastName: "sal", phone: "000", email: "jujuju" };
        this.showDetail = false;
    }
    // on select statement if its true
    step3Component.prototype.onSelect = function () {
        this.showDetail = true;
    };
    step3Component = __decorate([
        core_1.Component({
            selector: 'step-3',
            template: "<h3> step 3 two way data binding practice understanding more ing typescript and angular 2 and how to\n  add that<h2> if the condition is true candy crush like game needs alot of condition</h2></h3>\n  <p> this example show on how to data bind by adding a component on public contact and show the contact and email on the click property</p>\n  <p>public contact={firstName: \"jes\", lastName: \"sal\", phone:\"000\", email: \"jujuju\"};\n   this is the code to be put on export class</p>\n  <p> so that when you click on it it will appear a phone num and email</p>\n  <p>*ngIf=\"showDetail === true\"-->>>> the if statement</p>\n  \n        <h3 (click)=\"onSelect()\" [class.clicked]=\"showDetail === true\" align=\"center\">--->{{contact.firstName}} {{contact.lastName}}<---</h3>\n       <center> <input [(ngModel)]=\"contact.firstName\" type=\"text\"></center>\n        <div *ngIf=\"showDetail === true\" align=\"center\"> \n            phone Number: {{contact.phone}}<br>\n            E-Mail :{{contact.email}}\n        </div>\n  \n  \n  ",
            styleUrls: ["../src/style.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], step3Component);
    return step3Component;
}());
exports.step3Component = step3Component;
//# sourceMappingURL=step-3.component.js.map