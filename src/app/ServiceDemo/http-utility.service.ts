import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpUtilityService {

  constructor(private client: HttpClient) { }
  getUsers(): Observable<any> {
    return this.client.get("https://jsonplaceholder.typicode.com/users/");
  }

}
