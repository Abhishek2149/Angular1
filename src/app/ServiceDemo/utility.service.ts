import { Injectable } from '@angular/core';
import { IUser } from '../iuser';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  ProductName: string = "Laptop";

  showMessage() {
    alert("You want to know more about services!");
  }
  user: IUser = {
    id: 1001,
    name: "Abhishek",
    username: "Abhi45",
    email: "abhi8556@gmail.com",
    phone: "8888888855",
    website: "www.angularconcepts.com"
  }

  Users: IUser[] = [
    {
      id: 1001,
      name: "Abhishek",
      username: "Abhi45",
      email: "abhi8556@gmail.com",
      phone: "8888888855",
      website: "https://www.angularconcepts.com"
    },
    {
      id: 1002,
      name: "Akash",
      username: "Akash8889",
      email: "akash8556@gmail.com",
      phone: "3265894825",
      website: "https://www.angularconcepts.com"
    },
    {
      id: 1003,
      name: "Vijay",
      username: "Vijay654",
      email: "vijay56@gmail.com",
      phone: "8945653285",
      website: "https://www.angularconcepts.com"
    }
  ]

  getUsers(){
    return this.Users;
  }

  getUserById(id:number):IUser{
    const user = this.Users.find(u => u.id==id)
    return user!;
  }

  postUser(user:IUser):string{
    const max_id = this.Users[this.Users.length-1].id+1;
    user.id = max_id;
    this.Users.push(user);
    return "User added successfully!"
  }

  putUser(user:IUser):string{
    const old_user = this.Users.find(u => u.id ==user.id)
    old_user!.id = user.id
    old_user!.name = user.name
    old_user!.username = user.username
    old_user!.email = user.email
    old_user!.phone = user.phone
    old_user!.website = user.website
    return "User updated sucessfully!";
  }

  deleteUser(id:number):string{
    this.Users =  this.Users.filter(u => u.id ==id)
    return "User deleted successfully!"
  }
}
