import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchFormComponent } from './components/sidebar/search-form/search-form.component';
import { UserComponent } from './components/sidebar/user/user.component';
import { ChatComponent } from './components/sidebar/chat/chat.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageComponent } from './components/messages/message/message.component';
import { SearchPipe } from './shared/pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SearchFormComponent,
    UserComponent,
    ChatComponent,
    MessagesComponent,
    MessageComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
