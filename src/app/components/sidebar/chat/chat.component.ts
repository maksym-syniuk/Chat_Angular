import { UsersService } from './../../../shared/services/users.service';
import { IUser } from './../../../shared/interfaces/IUser';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  @Input() searchString: string;
  constructor(public usersService: UsersService) { }

  onChatSelected(user: IUser) {
    this.usersService.setUser(user);
  }
}
