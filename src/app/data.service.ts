import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuestion, IAnswer } from './data.model';
import {Observable} from 'rxjs';

@Injectable()
export class DataService {
    private serverUrl = 'http://localhost:4000/';

    constructor(private http: HttpClient) { }

    getQuestion(id: number) {
      return this.http.get<IQuestion>(this.serverUrl + 'questions/' + id);
    }

    postQuestion(question) {
      return this.http.post<IQuestion>(
        this.serverUrl + 'questions/' + question.id,
        question
      );
    }

    getAllQuestions() {
       return this.http.get<IQuestion[]>(this.serverUrl + 'questions');
    }

    insertQuestion(id, doc) {
      console.log(doc);

      return this.http.post(this.serverUrl + 'questions', doc).subscribe();
    }

    updateQuestion(id, updateObj) {
      console.log(updateObj);

      return this.http.post(this.serverUrl + 'questions/' + id, updateObj).subscribe();
    }


    getAllAnswers(): Observable<IAnswer[]> {
      return this.http.get<IAnswer[]>(this.serverUrl + 'answers');
    }


    insertAnswer(id, doc) {
      console.log(doc);
      return this.http.post(this.serverUrl + 'answers/' + id, doc).subscribe();
    }

    updateAnswer(id, updateObj) {
      return this.http.put(this.serverUrl + 'answers/' + id, updateObj).subscribe();
    }

  }

