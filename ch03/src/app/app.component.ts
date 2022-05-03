import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  currentItem = 'Television Input';
  hero = 'Spectrum';
  fontSizePx = 16;
  fontSizeOneWayPx = 20;
  items = ['item1', 'item2', 'item3', 'item4'];
  lastChanceItem = 'Beanbag';
  wishlist = ['Drone', 'Computer'];
  currentItem2 = 'Television Input2';
  price = 50;

  onLike(): void {
    window.alert(`I like ${this.hero}`);
    this.hero = 'Boothstomper';
  }

  increase(): void {
    this.fontSizeOneWayPx += 1;
  }

  decrease(): void {
    this.fontSizeOneWayPx -= 1;
  }

  addItem(newItem: string): void {
    console.log(`app.component : ${newItem} `);
    this.items.push(newItem);
  }

  crossOffItem(item: string): void {
    console.warn(`Parent says: crossing off ${item}.`);
  }

  buyClearanceItem(item: string): void {
    console.warn(`Parent says: buying ${item}.`);
  }

  saveForLater(item: string): void {
    console.warn(`Parent says: saving output item1: ${item} for later.`);
  }

  addToWishList(wish: string): void {
    console.warn(`Parent says: adding ${this.currentItem} to your wishlist.`);
    this.wishlist.push(wish);
    console.warn(this.wishlist);
  }

}
