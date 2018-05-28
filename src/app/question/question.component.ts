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
  checkIfAnswer: boolean;

  constructor(private service: DataService,
              private router: Router ) { }

  ngOnInit() {
    this.checkIfAnswer = false;

    this.service.getAllQuestions().subscribe(questions => {
      this.questions = questions;
      this.question = this.questions.find( (q) => {
        return q.id === 1;
      });
      console.log('this question: ' , this.question);
    });

    this.service.getAllAnswers().subscribe((answers: IAnswer[]) => {
      this.answers = answers;
      console.log('all answers: ' , answers); });
  }

  onClickYes() {
    if (this.question.typeAfterYes === 'answer') {
      this.checkIfAnswer = true;
    } else if (this.question.typeAfterYes === 'question') {
      const questionId = this.question.idAfterYes;
      this.service.getQuestion(questionId).subscribe( question => {
        this.question = question;
        console.log(this.question);
        });
    }
  }

  checkAnswer() {}
}

