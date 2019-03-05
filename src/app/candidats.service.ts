import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidat } from './candidat';



@Injectable()
export class CandidatsService {
  privat
  public API = '//localhost:8080/ws';
  public CANDIDAT_API = this.API + '/candidats';
  public CANDIDAT_QUALIFIES_API = this.API + '/candidatsQualifies';

  constructor(private http: HttpClient) { 

  }
  getAll(): Observable<any> {
    return this.http.get(this.CANDIDAT_API);
  }

  getAllQualified(): Observable<any> {
    return this.http.get(this.CANDIDAT_QUALIFIES_API);
  }

  getCandidat(numcan: number) {
    return this.http.get(this.CANDIDAT_API + '/' + numcan);
  }
/*
  save(can: any): Observable<any> {
    let result: Observable<Object>;
    if (can['href']) {
      result = this.http.put(can.href, can);
    } else {
      result = this.http.post(this.CANDIDAT_API, can);
    }
    return result;
  }
  remove(href: string) {
    return this.http.delete(href);
  }*/

  
   
}

