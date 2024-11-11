import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environments";
import {Question} from "../../models/Question";



@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private url = environment.url + "/Question";

  constructor(private http: HttpClient) {
  }

  // Récupérer tous les Questions
  getQuestions(): Observable<Question[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Question[]>(this.url + '/retrieve-all-Questions', {headers});
  }

  // Ajouter un Question
  addQuestion(Question: Question): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + '/add-Question', Question, {headers});
  }

  // Récupérer un Question par ID
  getQuestionById(id: string): Observable<Question> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Question>(`${this.url}/retrieve-Question/${id}`, {headers});
  }

  // Mettre à jour un Question
  updateQuestion(id: string, Question: Question): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`${this.url}/modify-Question/${id}`, Question, {headers});
  }

  // Supprimer un Question
  deleteQuestion(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(`${this.url}/remove-Question/${id}`, {headers});
  }

  // Télécharger une image de profil pour un Question
  uploadImage(file: File, id: string): Observable<HttpEvent<{}>> {
    let formData = new FormData();
    formData.append('file', file);

    const request = new HttpRequest('POST', this.url + '/uploadImage/' + id, formData, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(request);
  }
}
