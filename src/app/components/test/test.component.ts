import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test', templateUrl: './test.component.html', styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {
  elInput: any;
  constructor () {
  }
  ngOnInit () {
    this.elInput = document.getElementById('input');
    console.log(this.elInput.value);
  }
}