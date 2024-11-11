import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environments";
import {Quiz} from "../../models/Quiz";



@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private url = environment.url + "/Quiz";

  constructor(private http: HttpClient) {
  }

  // Récupérer tous les Quizs
  getQuizs(): Observable<Quiz[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Quiz[]>(this.url + '/retrieve-all-Quizs', {headers});
  }

  // Ajouter un Quiz
  addQuiz(Quiz: Quiz): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + '/add-Quiz', Quiz, {headers});
  }

  // Récupérer un Quiz par ID
  getQuizById(id: string): Observable<Quiz> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Quiz>(`${this.url}/retrieve-Quiz/${id}`, {headers});
  }

  // Mettre à jour un Quiz
  updateQuiz(id: string, Quiz: Quiz): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`${this.url}/modify-Quiz/${id}`, Quiz, {headers});
  }

  // Supprimer un Quiz
  deleteQuiz(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(`${this.url}/remove-Quiz/${id}`, {headers});
  }

  // Télécharger une image de profil pour un Quiz
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
