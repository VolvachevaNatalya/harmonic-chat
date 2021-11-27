import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/component/chat/chat.component';
import {NbChatModule, NbThemeModule, NbLayoutModule, NbCardModule, NbListModule, NbUserModule} from "@nebular/theme";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { ChatUsersComponent } from './chat/component/chat-users/chat-users.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatUsersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot(),
    NbChatModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    HttpClientModule,
    NbListModule,
    NbCardModule,
    NbUserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
