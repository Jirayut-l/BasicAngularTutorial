import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-aliasing',
  templateUrl: './aliasing.component.html',
  styleUrls: ['./aliasing.component.css'],
  inputs: ['input1: saveForLaterItem1'], // propertyName:alias
  outputs: ['outputEvent1: saveForLaterEvent1']
})
export class AliasingComponent {

  input1 = '';
  outputEvent1: EventEmitter<string> = new EventEmitter<string>();
  @Input('wishListItem') input2 = ''; //  @Input(alias)
  @Output('wishEvent') outputEvent2 = new EventEmitter<string>(); //  @Output(alias) propertyName = ...


  saveIt(): void {
    console.log('input1', this.input1);
    console.warn('Child says: emitting outputEvent1 with', this.input1);
    this.outputEvent1.emit(this.input1);
  }

  wishForIt(): void {
    console.log('input2', this.input2);
    console.warn('Child says: emitting outputEvent2', this.input2);
    this.outputEvent2.emit(this.input2);
  }
}
