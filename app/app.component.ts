import { Component } from '@angular/core';
import { step4Component } from './step4/step-4.component';
import { step3Component } from './step4/step3/step-3.component';
@Component({
  selector: 'my-app',
  template: ` <h1>hi this is my notes in training</h1>
  <p>this is a test learning and mastering angular2 before starting the project candy crush like game</p>
  <br>
  <h3> 1st step testing and learning on components in angular 2</h3>
  <h3> 2nd step building or setting up development environment</h3>
 
  <p> in setting up just follow the step setup on angular2 website</p>
  <br>
  <step-3></step-3>
        <br>       
<step-4></step-4>

  `,
  directives: [step4Component,step3Component]
  
  
  
})
export class AppComponent { 
   
}
