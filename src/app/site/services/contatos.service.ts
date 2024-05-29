import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { EmailModel } from '../models/Email.model';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  protected URL_API = 'https://api.mailersend.com/v1/email';
  protected ACESS_TOKEN = 'mlsn.79e71af006bf5ea4f7f31b20d31016a5c310f0bffe45f962cd025a564a6cec54';
  private reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': 'Bearer ' + this.ACESS_TOKEN,
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*'
  });


  constructor(
    private httpClient: HttpClient,
  ) { }

  enviarEmail( data: EmailModel): Observable<any> {
    return this.httpClient.post( `${this.URL_API}`, JSON.stringify(data), { headers: this.reqHeader }).pipe(take(1));
  }
}
