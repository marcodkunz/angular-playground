import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {

  @Output() onTextUpdate = new EventEmitter<string>();

  text: string = '';

  constructor() {
  }

  submit(): void {
    this.onTextUpdate.emit(this.text);

    this.text = '';
  }

}
