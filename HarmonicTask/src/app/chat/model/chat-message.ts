import {ChatUser} from "./chat-user";

export interface ChatMessage {
  text: string;
  date: Date;
  reply: boolean;
  type: string,
  user: ChatUser;

}
