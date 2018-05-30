import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  answer;
  question;
  mouseOver;
  loginInvalid = false;

  constructor(private router: Router) {

  }

  ngOnInit() {}

  save(formValues) {
    console.log(formValues);
  }

  cancel() {
    this.router.navigate(['events']);
  }

}
