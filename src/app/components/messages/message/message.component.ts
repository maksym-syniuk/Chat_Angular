import { IUser } from './../../../shared/interfaces/IUser';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() currentUser: IUser;
  constructor() { }
}
