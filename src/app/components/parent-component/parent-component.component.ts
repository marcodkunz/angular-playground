import {Component} from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {

  text: string = '';

  constructor() {
  }

  updateText(newText: string): void {
    this.text = newText;
  }

}
