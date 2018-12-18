import { Component } from "@angular/core"
import { ApiService } from './app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html',

  })
  export class QuestionsComponent {


    question = {};
    questions ;


    constructor(private api: ApiService, private route: ActivatedRoute){}

    ngOnInit(){
        var quizId = this.route.snapshot.paramMap.get("quizId");
        console.log("Voici = " + quizId);

            this.api.getQuestions(quizId).subscribe(res => {
                this.questions = res;
                console.log(this.questions);
            });
    }
  
  }