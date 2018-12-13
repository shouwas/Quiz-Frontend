import { Component } from "@angular/core"

@Component({
    selector: 'question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
  })
  export class QuestionComponent {
    title = 'Quiz-Question!';

     post(value){
         console.log(value);
    }
  }