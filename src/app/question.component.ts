import { Component } from "@angular/core"
import { ApiService } from './app.service';

@Component({
    selector: 'question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
  })
  export class QuestionComponent {
    title = 'Quiz-Question!';

    question = {};

    constructor(private api: ApiService){}
   
      post(question)
      {
        this.api.postQuestion(question)

      }
  
  }