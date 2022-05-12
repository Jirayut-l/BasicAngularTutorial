import {Directive, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appAppHighLight]'
})
export class AppHighLightDirective implements OnInit {

  @HostBinding('style.border') border: string;
  @HostBinding('style.color') color: string;
  @HostListener('mouseover')
  onMouseOver(): void {
    this.border = '5px solid blue';
    console.log('Mouse over');
  }
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.border = '';
    console.log('Mouse Leave');
  }

  ngOnInit(): void {
    this.color = 'red';
  }


}
