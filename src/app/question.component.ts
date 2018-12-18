import { Component } from "@angular/core"
import { ApiService } from './app.service';
import {ActivatedRoute} from"@angular/router";

@Component({
    selector: 'question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
  })
  export class QuestionComponent {

    question = {};
    quizId;

    constructor(private api: ApiService, private route: ActivatedRoute){}

    ngOnInit(){
      this.quizId = this.route.snapshot.paramMap.get('quizId');
      
      this.api.questionSelected.subscribe(question => this.question = question)
  }
   
      post(question)
      {
        question.quizId =this.quizId
        console.log("allo " + question.quizId );
        this.api.postQuestion(question)
        console.log(question );

      }
  
  }