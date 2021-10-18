import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {

  @Output() TextUpdate = new EventEmitter<string>();

  text: string = '';

  constructor() {
  }

  submit(): void {
    this.TextUpdate.emit(this.text);

    this.text = '';
  }

}
