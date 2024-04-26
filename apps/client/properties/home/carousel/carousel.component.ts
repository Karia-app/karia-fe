import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  images: string[] = [
    'https://static.zerodown.com/photos/34547752/686794609/original.jpg',

    'https://housing.com/news/wp-content/uploads/2022/11/shutterstock_1715891752-1200x700-compressed.jpg',
    'https://cdn.houseplansservices.com/product/h4ear534efn58jv3nn8np4vmd9/w800x533.jpg?v=2',
  ];

  currentIndex = 0;
  getCurrentSlideUrl(): string {
    return `url(${this.images[this.currentIndex]})`;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.images.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.images.length - 1
      : this.currentIndex - 1;
    this.currentIndex = newIndex;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}
