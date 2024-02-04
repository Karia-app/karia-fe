import { Component, Input, OnInit } from '@angular/core';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{
  @Input() app_slides : string[] = [];
constructor(){}
  ngOnInit() {
    console.log(this.app_slides)
  }
currentIndex = 0;
getSlideUrl(index: number) : string{
  return `url(${this.app_slides[index]})`
  }
  faChevronCircleLeft = faChevronCircleLeft;
  faChevronCircleRight = faChevronCircleRight;
  faCircle = faCircle
goToNext():void{
  const isLastSlide = this.currentIndex === this.app_slides.length -1;
  const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
  this.currentIndex = newIndex;
}
goToPrevious():void{
  const isFirstSlide = this.currentIndex === 0;
  const newIndex = isFirstSlide ? this.app_slides.length - 1 : this.currentIndex - 1;
  this.currentIndex = newIndex;
}
goToSlide(index : number):void{
  this.currentIndex = index;
}
}
