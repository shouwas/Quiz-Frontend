import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ApiService } from './app.service';




import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, QuestionComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule,
     MatButtonModule, MatCheckboxModule,
     MatCardModule,MatInputModule,FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
