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
      console.log('all questions' , this.questions);
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
    if (this.checkIfAnswer === false) {

        if (this.question.typeAfterYes === 'question') {
          const questionId = this.question.idAfterYes;
          this.question = this.questions.find(question => question.id === questionId);
          console.log(this.question);

        } else {
          const answerId = this.question.idAfterYes;
          this.answer = this.answers.find(answer => answer.id === answerId);
         this.checkIfAnswer = true;
      }

    } else {
      this.router.navigate(['/win']);
    }
  }

  onClickNo() {
    if (this.checkIfAnswer === false) {

      if (this.question.typeAfterNo === 'question') {
        const questionId = this.question.idAfterNo;
        this.question = this.questions.find(question => question.id === questionId);
        console.log(this.question);

      } else {
        const answerId = this.question.idAfterNo;
        this.answer = this.answers.find(answer => answer.id === answerId);
        this.checkIfAnswer = true;
      }

    } else {
      this.router.navigate(['/new']);
    }
  }
}

