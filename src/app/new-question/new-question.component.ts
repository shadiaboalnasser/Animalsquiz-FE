import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {DataService} from '../data.service';
import {IAnswer, IQuestion} from '../data.model';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  answer = '';
  question: any;
  oldQuestion;
  oldAnswer;
  newQuestion: IQuestion;
  newAnswer: IAnswer;
  allQuestions;
  allAnswers;
  mouseOver;
  inputInvalid = false;

  constructor(private router: Router,
              private data: DataService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    const questionId = this.route.snapshot.paramMap.get('questionId');
    const answerId = this.route.snapshot.paramMap.get('answerId');
    this.data.getAllQuestions().subscribe(questions => {
      this.allQuestions = questions;
    });
    this.data.getAllAnswers().subscribe(answers => {
      this.allAnswers = answers;
    });
    this.data.getQuestion(parseInt(questionId)).subscribe(question => {
      this.oldQuestion = question[0];
      console.log('old question', this.oldQuestion);
    });
    this.data.getAnswer(parseInt(answerId)).subscribe(answer => {
      this.oldAnswer = answer[0];
      console.log('old answer', this.oldAnswer);
    });
  }

  save(formValues) {

    // get the biggest id question
    let biggestIdAfterNo = 0;
    let biggestIdAfterYes = 0;
    this.allQuestions.forEach(question => {
      if (question.idAfterNo > biggestIdAfterNo) {
        biggestIdAfterNo = question.idAfterNo;
      }
      if (question.idAfterYes > biggestIdAfterYes) {
        biggestIdAfterYes = question.idAfterYes;
      }
    });
    this.allAnswers.forEach(answer => {
      if (answer.id >= biggestIdAfterYes) {
        biggestIdAfterYes = ++answer.id;
      }
      if (answer.id >= biggestIdAfterNo) {
        biggestIdAfterNo = ++answer.id;
      }
    });
    console.log('biggest id after no', biggestIdAfterNo);
    console.log('biggest id after yes', biggestIdAfterYes);
    if (this.oldAnswer.id === this.oldQuestion.idAfterNo) {
      let updateQuestion;
      updateQuestion = {typeAfterNo: 'question'};
      this.data.updateQuestion(this.oldQuestion.id, updateQuestion);

      // create new question
      this.newQuestion = {
        id: this.oldQuestion.idAfterNo,
        question: formValues.question,
        idAfterNo: ++biggestIdAfterNo,
        idAfterYes: ++biggestIdAfterYes,
        typeAfterYes: 'answer',
        typeAfterNo: 'answer',
      };
      this.data.postQuestion(this.newQuestion);
      console.log('id after no new question', this.newQuestion.idAfterNo);
      console.log('id after no new question', this.newQuestion.idAfterYes);

      // update old answer id
      const oldAnswerId = this.oldAnswer.id;
      this.oldAnswer.id = this.newQuestion.idAfterNo;
      this.data.updateAnswer(oldAnswerId, this.oldAnswer);

      // create new Answer
      this.newAnswer = {
        id: this.newQuestion.idAfterYes,
        answer: formValues.answer
      };
      console.log('id after yes new answer', this.newQuestion.idAfterYes);
      this.data.postAnswer(this.newAnswer);
      alert('Save complete');
      this.router.navigate(['home']);

    } else {
      let updateQuestion;
      updateQuestion = {typeAfterYes: 'question'};
      this.data.updateQuestion(this.oldQuestion.id, updateQuestion);

      // create new question
      this.newQuestion = {
        id: this.oldQuestion.idAfterYes,
        question: formValues.question,
        idAfterNo: ++biggestIdAfterNo,
        idAfterYes: ++biggestIdAfterYes,
        typeAfterYes: 'answer',
        typeAfterNo: 'answer',
      };
      this.data.postQuestion(this.newQuestion);

      // update old answer id
      const oldAnswerId = this.oldAnswer.id;
      this.oldAnswer.id = this.newQuestion.idAfterNo;
      this.data.updateAnswer(oldAnswerId, this.oldAnswer);

      // create new Answer
      this.newAnswer = {
        id: this.newQuestion.idAfterYes,
        answer: formValues.answer
      };
      this.data.postAnswer(this.newAnswer);
      alert('Save complete');
      this.router.navigate(['home']);
    }
  }

  cancel() {
    this.router.navigate(['home']);
  }

}
