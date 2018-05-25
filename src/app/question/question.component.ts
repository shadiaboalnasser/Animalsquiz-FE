import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { IQuestion, IAnswer } from '../data.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question: IQuestion;
  questions: IQuestion[];
  answer: IAnswer;
  answers: IAnswer[];
  checkAnswer: boolean;

  constructor(private _data: DataService,
              private _router: Router ) { }

  ngOnInit() {
    this.checkAnswer = false;
    this._data.getAllQuestions().subscribe(questions => {
      this.questions = questions;
      this.question = this.questions.filter(
        question => question.id === 1)[0];
    //  this.calcEstimated(this.question);
    });
    this._data.getAllAnswers().subscribe(a => {
      this.answers = a;
    });
  }

  NextQuestion(isYes: boolean) {

    if (this.checkAnswer) {
      if (isYes) {
        this._router.navigate(['/win']);
      } else {

        console.log(this.question);

        this._router.navigate(['/new', this.question.id, this.question.nextNID]);
      }
    } else {
      // this.lvl = -1;
      // this.estimatedMin = 1000;
      // this.estimatedMax = 0;
      const nextId = isYes ? this.question.nextYID : this.question.nextNID;
      const nextType = isYes ? this.question.nextYType : this.question.nextNType;
      this.checkAnswer = false;

      if (nextType === 0) {
      this.question = this.questions.filter(
        question => question.id === nextId)[0];
        // this.calcEstimated (this.question);
      } else {
        this.answer = this.answers.filter(answer => answer.id === nextId)[0];
        this.question = {id: this.question.id, question: 'I think it is ' + this.answer.name, nextNID: nextId};
        this.checkAnswer = true;
      }
    }
  }
  onYes() {
    this.NextQuestion(true);
  }

  onNo() {
    this.NextQuestion(false);
  }
}
