import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../iuser';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilityService {

  constructor(private client:HttpClient) { }

  getUsers():Observable<any>{
    return this.client.get("https://jsonplaceholdwe.typicode.com/users/")
  }
}
