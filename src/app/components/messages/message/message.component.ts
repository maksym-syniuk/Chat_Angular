import { IUser } from './../../../shared/interfaces/IUser';
import { IMessage } from './../../../shared/interfaces/IMessage';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() currentUser: IUser;
  constructor() { }

  ngOnInit(): void {

  }

}
