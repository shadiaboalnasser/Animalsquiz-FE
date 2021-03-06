import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import {appRoutes} from './routes';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import {DataService} from './data.service';
import { NewQuestionComponent } from './new-question/new-question.component';
import { WinComponent } from './win/win.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    QuestionComponent,
    NewQuestionComponent,
    WinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
