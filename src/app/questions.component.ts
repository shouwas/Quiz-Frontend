import { Component } from "@angular/core"
import { ApiService } from './app.service';

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html',

  })
  export class QuestionsComponent {


    question = {};
    questions ;

    constructor(private api: ApiService){}

    ngOnInit(){

            this.api.getQuestions().subscribe(res => {
                this.questions = res;
                console.log(res);
            });
    }


      post(question)
      {
        this.api.postQuestion(question)

      }
  
  }