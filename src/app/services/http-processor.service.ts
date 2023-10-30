import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpProcessorService {

  constructor(private http: HttpClient) { }

  fetchApi(url:string):Observable<any>{
    return this.http.get(environment.apiKey+url);

  }
}
