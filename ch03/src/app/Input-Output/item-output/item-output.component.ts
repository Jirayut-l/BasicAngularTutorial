import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.css']
})
export class ItemOutputComponent {

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string): void {
    console.log(`item-output.component : ${value} `);
    this.newItemEvent.emit(value);
  }

}
