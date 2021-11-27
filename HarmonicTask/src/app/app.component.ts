import { Component } from '@angular/core';
import {ChatUser} from "./chat/model/chat-user";
import {ChatService} from "./chat/service/chat.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  browserUser: ChatUser;

  constructor(chatService: ChatService) {
    this.browserUser = chatService.getBrowserUser();
  }

  currentChatUser: ChatUser | undefined;
  title = 'HarmonicTask';

  openChat(chatUser: ChatUser) {
    this.currentChatUser = chatUser;
  }
}
