import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../service/user.service";
import {Observable} from "rxjs";
import {ChatUser} from "../../model/chat-user";

@Component({
  selector: 'app-chat-users',
  templateUrl: './chat-users.component.html',
  styleUrls: ['./chat-users.component.css']
})
export class ChatUsersComponent implements OnInit {
  chatUsers: Observable<ChatUser[]>;

  constructor(public userService: UserService) {
    this.chatUsers = this.userService.getUsers();
  }

  @Output()
  public userClicked = new EventEmitter<ChatUser>();

  ngOnInit(): void {
  }

  onUserClick(chatUser: ChatUser) {
    this.userClicked.emit(chatUser);
  }

}
