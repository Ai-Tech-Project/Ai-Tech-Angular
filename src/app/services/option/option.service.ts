import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environments";
import {Option} from "../../models/Option";



@Injectable({
  providedIn: 'root'
})
export class OptionService {

  private url = environment.url + "/Option";

  constructor(private http: HttpClient) {
  }

  // Récupérer tous les Options
  getOptions(): Observable<Option[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Option[]>(this.url + '/retrieve-all-Options', {headers});
  }

  // Ajouter un Option
  addOption(Option: Option): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + '/add-Option', Option, {headers});
  }

  // Récupérer un Option par ID
  getOptionById(id: string): Observable<Option> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Option>(`${this.url}/retrieve-Option/${id}`, {headers});
  }

  // Mettre à jour un Option
  updateOption(id: string, Option: Option): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`${this.url}/modify-Option/${id}`, Option, {headers});
  }

  // Supprimer un Option
  deleteOption(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(`${this.url}/remove-Option/${id}`, {headers});
  }

  // Télécharger une image de profil pour un Option
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
