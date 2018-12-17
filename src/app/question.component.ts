import { Component } from "@angular/core"
import { ApiService } from './app.service';

@Component({
    selector: 'question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
  })
  export class QuestionComponent {

    question = {};

    constructor(private api: ApiService){}

    ngOnInit(){
      this.api.questionSelected.subscribe(question => this.question = question)
  }
   
      post(question)
      {
        this.api.postQuestion(question)

      }
  
  }