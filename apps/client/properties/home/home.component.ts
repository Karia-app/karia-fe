import { Component, TemplateRef } from '@angular/core';
import { HomeService } from '../services/home.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { Property } from '../models/property';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService],
})
export class HomeComponent {
  listProperties: any[] = [];

  property!: any | null;
  id!: number;
  thenBlock: TemplateRef<any> | null = null;
  Block: TemplateRef<any> | null = null;
  images: string[] = [
    'https://static.vecteezy.com/system/resources/thumbnails/023/308/053/small_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-photo.jpg',
    'https://cdn11.bigcommerce.com/s-g95xg0y1db/images/stencil/1280x1280/g/modern%20house%20plan%20-%20carbondale__05776.original.jpg',
    'https://static.zerodown.com/photos/34547752/686794609/original.jpg',
  ];

  currentIndex: number[] = Array(6).fill(0);
  constructor(private homeservice: HomeService, private router: Router) {}
  // getCurrentSlideUrl(): string {
  //   return `url(${this.images[this.currentIndex]})`;
  // }
  ngOnInit(): void {
    this.homeservice.getproperties().subscribe((properties: Property[]) => {
      const allproperties = properties.map((property) => {
        return {
          ...property,
          price: this.randomnumber(),
          star: this.randomstar(),
          clients: this.randomclient(),
        };
      });
      this.listProperties = allproperties;
      console.log(this.listProperties);
    });
  }
  goToSlide(index: number, i: number): void {
    this.currentIndex[index] = i;
  }
  randomnumber(): number {
    return Math.floor(Math.random() * (3000 - 800 + 1) + 800);
  }
  randomstar(): number {
    return Math.floor(Math.random() * (5 - 1 + 1) + 1);
  }
  randomclient(): number {
    return Math.floor(Math.random() * (100 - 1 + 1) + 1);
  }
}
