import { UsersService } from './../../../shared/services/users.service';
import { IUser } from './../../../shared/interfaces/IUser';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
  }

  onChatSelected(user: IUser) {
    this.usersService.setUser(user);
  }
}
