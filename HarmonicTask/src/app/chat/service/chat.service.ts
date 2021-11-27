import { Injectable } from '@angular/core';
import {ChatMessage} from "../model/chat-message";
import {Observable, of } from "rxjs";
import {ChatUser} from "../model/chat-user";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  browserUser: ChatUser = {
    id: 0,
    name: "John Browser",
    online: true,
    avatar: "https://i.gifer.com/no.gif"
  }

  chatStorage = new Map<number, ChatMessage[]>();

  constructor() { }

  getBrowserUser(): ChatUser {
    return this.browserUser;
  }

  loadMessages(userId: number): Observable<ChatMessage[]> {
    let chat = this.chatStorage.get(userId);
    if (!chat) {
      chat = [];
      this.chatStorage.set(userId, chat);
    }
    return of(chat);
  }

  sendMessage(chatUser: ChatUser, message: string) {
    let chat = this.chatStorage.get(chatUser.id);
    if (!chat) {
      chat = [];
      this.chatStorage.set(chatUser.id, chat);
    }
    chat.push({
      text: message,
      date: new Date(),
      reply: false,
      type: "text",
      user: this.browserUser
    })

    console.log(chat);

    setTimeout(() => this.reply(chatUser,'Some message'), 1000);
  }

  private reply(chatUser: ChatUser, message: string) {
    const chat = this.chatStorage.get(chatUser.id);
    if (!chat) return;
    chat.push({
      text: "Some random message",
      date: new Date(),
      reply: true,
      type: "text",
      user: chatUser
    })
  }
}
