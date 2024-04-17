import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  images: string[] = [
    'https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf_105762-2104.jpg?t=st=1713285296~exp=1713288896~hmac=d32f1d4ebc2e556f1b3e87c397dcc29239685043f8c3ab94b2dfcd0e3670a8ab&w=1060',
    'https://img.freepik.com/free-photo/modern-living-room-style_53876-144814.jpg?t=st=1713286392~exp=1713289992~hmac=ef1e3a5b335f82c75767bf8a63ab48fcbf1cc4f1173a0e451139386a9f2af389&w=1060',
    'https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf_105762-2224.jpg?t=st=1713286426~exp=1713290026~hmac=ba036f297fb033927f5973fd828e8f31a6c2395126eed23d6595f58991ced402&w=1060',
  ];

  currentIndex: number[] = Array(6).fill(0);

  // getCurrentSlideUrl(): string {
  //   return `url(${this.images[this.currentIndex]})`;
  // }

  goToSlide(index: number, i: number): void {
    this.currentIndex[index] = i;
  }
}
