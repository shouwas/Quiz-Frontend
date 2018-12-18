import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {MatButtonModule, MatCheckboxModule, MatListModule, MatCardModule, MatInputModule, MatToolbarModule} from '@angular/material';
// import {MatListModule} from '@angular/material/list';
// import {MatCardModule} from '@angular/material/card';
// import {MatInputModule} from '@angular/material';
// import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { ApiService } from './app.service';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { QuestionsComponent } from './questions.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav.component';
import { QuizComponent } from './quiz.component';
import { QuizzesComponent } from './quizzes.component';


const routes = [
  {path: '', component: HomeComponent},
  {path: 'question', component: QuestionComponent},
  {path: 'question/:quizId', component: QuestionComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'quiz', component: QuizComponent},
]
@NgModule({
  declarations: [
    AppComponent, QuestionComponent, 
    QuestionsComponent, HomeComponent, 
    NavComponent, QuizComponent, 
    QuizzesComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
     RouterModule.forRoot(routes),
     BrowserAnimationsModule,
     MatButtonModule, MatCheckboxModule,
     MatCardModule,MatInputModule,FormsModule, MatListModule, MatToolbarModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
