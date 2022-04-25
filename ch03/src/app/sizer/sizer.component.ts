import {Component, Input, Output, EventEmitter, SimpleChanges, OnChanges} from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent implements OnChanges {

  @Input() size: number;
  @Output() sizeChange = new EventEmitter<number>();


  increase(): void {
    this.resize(+1);
  }

  decrease(): void {
    this.resize(-1);
  }

  resize(delta: number): void {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const sizeValue = changes.size;
    const oldValue = sizeValue.previousValue;
    const newValue = sizeValue.currentValue;

    if (!sizeValue.isFirstChange()) {
      console.log(`sizeValue changed from ${oldValue} to ${newValue}`);
    }
  }

}
