import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidat } from './candidat';
import { ActivatedRoute } from '@angular/router';


@Injectable()
export class CandidatsService {
 
  public API = '//localhost:8080/ws';
  public CANDIDAT_API = this.API + '/candidats';
  public CANDIDAT_QUALIFIES_API = this.API + '/candidatsQualifies';
   public  httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin' :'*',
    'Access-Control-Allow-Methods' : 'GET,POST,PUT,DELETE',
    'Content-Type': 'application/json'
   })
 }
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient) { 

  }
  getAll(): Observable<any> {
    return this.http.get(this.CANDIDAT_API);
  }

  getAllQualified(): Observable<any> {
    return this.http.get(this.CANDIDAT_QUALIFIES_API);
  }

  getCandidat(id: string): Observable<Candidat> {
    return this.http.get<Candidat>(this.CANDIDAT_API + '/details?id=' + id);
  }

  update(can: Candidat): Observable<Candidat> {
     // let canHeaders = new Headers({'Content-Type': 'application/json'});
      return this.http.put<Candidat>(this.CANDIDAT_API + '/save', JSON.stringify(can),this.httpOptions);
      //.toPromise()
     // .then(response => response.id as Candidat[])
     // .catch(this.handleError); 
  }
  delete(id: string) {
    return this.http.delete<Candidat>(this.CANDIDAT_API+'/delete?id='+id, this.httpOptions);
  }

}

