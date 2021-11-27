import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ChatUser} from '../model/chat-user'
import {HttpClient} from "@angular/common/http";
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<ChatUser[]> {
    return of([
        {
          "id": 0,
          "name": "John",
          "online": true,
          "avatar": "https://i.gifer.com/no.gif"
        },
        {
          "id": 1,
          "name": "Mike",
          "online": false,
          "avatar": "https://i.gifer.com/no.gif"
        },
        {
          "id": 2,
          "name": "Bob",
          "online": false,
          "avatar": "https://i.gifer.com/no.gif"
        }
      ]
    );
  }
}
