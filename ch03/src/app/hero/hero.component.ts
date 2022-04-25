import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnChanges {

  @Input() public name: string;
  @Output() public liked = new EventEmitter();

  // @Output() nameChange = new EventEmitter<string>();

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const hero = changes.name;
    const oldValue = hero.previousValue;
    const newValue = hero.currentValue;

    if (!hero.isFirstChange()) {
      console.log(`Hero changed from ${oldValue} to ${newValue}`);
    }
  }

  // changeValue(): void {
  //   this.nameChange.emit('EditX');
  // }

}
