import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuestion, IAnswer } from './data.model';

@Injectable()
export class DataService {
    private _backEndUrl = 'http://localhost:4000/';

    constructor(private _http: HttpClient) { }

    getQuestion(id: number) {
      return this._http.get<IQuestion[]>(this._backEndUrl + 'questions/' + id);
    }

    postQuestion(question) {
      return this._http.post<IQuestion[]>(
        this._backEndUrl + 'questions/' + question.id,
        question
      );
    }

    getAllQuestions() {
       return this._http.get<IQuestion[]>(this._backEndUrl + 'questions');
    }

    insertQuestion(id, doc) {
      console.log(doc);

      return this._http.post(this._backEndUrl + 'questions', doc).subscribe();
    }

    updateQuestion(id, updateObj) {
      console.log(updateObj);

      return this._http.post(this._backEndUrl + 'questions/' + id, updateObj).subscribe();
    }


    getAllAnswers() {
      return this._http.get<IAnswer[]>(this._backEndUrl + 'answers');
    }

    insertAnswer(id, doc) {
      console.log(doc);
      return this._http.post(this._backEndUrl + 'answers/' + id, doc).subscribe();
    }

    updateAnswer(id, updateObj) {
      return this._http.put(this._backEndUrl + 'answers/' + id, updateObj).subscribe();
    }

  }

