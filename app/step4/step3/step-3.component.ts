import { Component } from '@angular/core';
@Component({
  selector: 'step-3',
  template: `<h3> step 3 two way data binding practice understanding more ing typescript and angular 2 and how to
  add that<h2> if the condition is true candy crush like game needs alot of condition</h2></h3>
  <p> this example show on how to data bind by adding a component on public contact and show the contact and email on the click property</p>
  <p>public contact={firstName: "jes", lastName: "sal", phone:"000", email: "jujuju"};
   this is the code to be put on export class</p>
  <p> so that when you click on it it will appear a phone num and email</p>
  <p>*ngIf="showDetail === true"-->>>> the if statement</p>
  
        <h3 (click)="onSelect()" [class.clicked]="showDetail === true" align="center">--->{{contact.firstName}} {{contact.lastName}}<---</h3>
       <center> <input [(ngModel)]="contact.firstName" type="text"></center>
        <div *ngIf="showDetail === true" align="center"> 
            phone Number: {{contact.phone}}<br>
            E-Mail :{{contact.email}}
        </div>
  
  
  `,
  
  styleUrls:["../src/style.css"]
})
export class step3Component {
//- showing clases of contacts
     public contact={firstName: "jes", lastName: "sal", phone:"000", email: "jujuju"};
    public showDetail = false;
    // on select statement if its true
    onSelect(){
        this.showDetail = true;
    }
 }
