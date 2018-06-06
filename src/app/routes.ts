import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {QuestionComponent } from './question/question.component';
import {NewQuestionComponent} from './new-question/new-question.component';
import {WinComponent} from './win/win.component';

export const appRoutes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'question', component: QuestionComponent},
  { path: 'new/:questionId/:answerId', component: NewQuestionComponent},
  { path: 'win', component: WinComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent}
  // { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  // { path: 'events', component: EventsListComponent, resolve: { events1: EventListResolver } },
  // { path: 'events/:id', component: EventDetailComponent, resolve: { event: EventResolver } },
  // { path: 'events/session/new', component: CreateSessionComponent },
  // { path: '404', component: Error404Component },
  // { path: '', redirectTo: '/events', pathMatch: 'full' },



  // {path:'statics',component: StaticsComponent},
  // {path:'win',component: WinComponent},
  // {path:'save',component: SavingDataComponent},
  // {path:'new/:id/:aid',component: NewQuestionComponent},


];
