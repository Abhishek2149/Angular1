import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../iuser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = 'http://localhost:3000/users'
  //base url later will change according to API's
  constructor( private http:HttpClient) { }

  //GET single user
  getUser(id:number):Observable<any>{
    return this.http.get<IUser>(`${this.baseUrl}/${id}`);
  }

  //GET all users
  getUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>(`${this.baseUrl}`);
  }

  //POST: add new user
  addUser(user:IUser):Observable<any>{
    return this.http.post<IUser>(`${this.baseUrl}`,user)
  }

  //PUT : update user
  updateUser(user:IUser):Observable<any>{
    return this.http.put<IUser>(`${this.baseUrl}/${user.id}`,user)
  }

  //DELETE: delete user
  deleteUser(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
