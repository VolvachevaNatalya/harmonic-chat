import {Component, Input, OnInit} from '@angular/core';
import { ChatService } from '../../service/chat.service';
import {ChatUser} from "../../model/chat-user";
import {ChatMessage} from "../../model/chat-message";
import {Observable} from "rxjs";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  providers: [ ChatService ],
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {

  messages: Observable<ChatMessage[]> | undefined;

  @Input()
  browserUser: ChatUser | undefined;

  private _chatUser: ChatUser | undefined;
  @Input()
  set chatUser(chatUser: ChatUser | undefined) {
    this._chatUser = chatUser;
    if (this._chatUser) {
      this.messages = this.chatService.loadMessages(this._chatUser.id);
    }
  }
  get chatUser(): ChatUser | undefined {
    return this._chatUser;
  }

  constructor(public chatService: ChatService) {
  }

  ngOnInit(): void {
    if (this.chatUser) {
      this.messages = this.chatService.loadMessages(this.chatUser.id);
    }
  }

  sendMessage(event: any) {
    if (this.chatUser) {
      this.chatService.sendMessage(this.chatUser, event.message);
      this.messages = this.chatService.loadMessages(this.chatUser.id);
    }
  }
}
