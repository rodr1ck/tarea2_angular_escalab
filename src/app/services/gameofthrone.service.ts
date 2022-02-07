import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameofthroneService {

  urlGameOfThrones = 'https://thronesapi.com/api/v2/Characters';

  constructor(private http:HttpClient) { }

  getCharacter():Observable<any>{
    return this.http.get(this.urlGameOfThrones);
  }

}
