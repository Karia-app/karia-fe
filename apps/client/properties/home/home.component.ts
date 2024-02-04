import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Property } from 'libs/core-data/src/lib/common/property';
import { Observable } from 'rxjs';
import { faStar,faFire } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  properties$: Observable<Property[]>;
  slides: string[] = [
  "https://www.tanitdeco.com/web/uploads//products/salon-royale-salon-meuble-aloui-meubles-tunisie-1.jpg",
  "https://resize.elle.fr/original/var/plain_site/storage/images/deco/pieces/salon/20-salons-design/70221754-4-fre-FR/Je-veux-un-salon-design.jpg",
  "https://www.systemed.fr/images/conseils/conseils-et-selection-pour-l-amenagement-d-salon-design-moderne-16855.jpg"
  ]
  faStar = faStar;
  faFire = faFire
  constructor(private store: Store<{ properties: Property[] }>)
  {
    this.properties$ = store.select('properties');
  }
  
}
