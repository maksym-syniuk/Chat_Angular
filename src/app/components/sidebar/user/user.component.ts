import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() online: boolean;
  @Input() imagePath: string;

  validImage = false;

  constructor() { }

  ngOnInit() {
    // check if image path is valid
    this.checkImgSrc(this.imagePath);
  }

  checkImgSrc(src: string) {
    const img = new Image();
    img.onload = () => {
      this.validImage = true;
    };
    img.onerror = () => this.validImage = false;
    img.src = src;
  }
}
