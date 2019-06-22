import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-balance',
  templateUrl: './group-balance.page.html',
  styleUrls: ['./group-balance.page.scss'],
})
export class GroupBalancePage implements OnInit {

  slideOptions = {
    initialSlide: 1,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
  }

}
