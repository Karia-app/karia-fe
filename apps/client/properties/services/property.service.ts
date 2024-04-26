import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from '../models/property';
import { ImageData } from '../models/imageData';
import { FirebaseService } from 'libs/core-data/src/lib/firebase/services/firebase.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient, private firebaseService: FirebaseService) { }

    async createProperty(property : Property,primaryImage : ImageData, secondaryImages: ImageData[]) {
    const stringifiedUserInfo: string | null = localStorage.getItem('token');
      if (stringifiedUserInfo) {
        const userInfo = JSON.parse(stringifiedUserInfo);
        const images = [primaryImage, ...secondaryImages];
        console.log(images);
        const firebaseUrls = await this.insertImagesInFirebase(images, property.name);
        console.log('LOADED', firebaseUrls);
        property.ownerId = userInfo.user_id;
        firebaseUrls.forEach((firebaseUrl, index) => {
          switch (index) {
            case 0:
              property.image1 = firebaseUrl;
              break;
            case 1:
              property.image2 = firebaseUrl;
              break;
            case 2:
              property.image3 = firebaseUrl;
              break;
            case 4:
              property.image4 = firebaseUrl;
              break;
            case 5:
              property.image5 = firebaseUrl;
              break;
            default:
              break;
          }
        })
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${userInfo.id_token}`
        });
        return this.http.post('http://localhost:8080/services/property/api/properties', property, { headers });
      }
      else {
        console.log('ELSE')
        return null;
      }
  }
  async insertImagesInFirebase(images: ImageData[], propertyName: string) {
        const firebaseImageUrls : string[] = [];
    for (let i = 0; i < images.length; i++)
    { 
      let image = images[i]
      if (image.file != null) {
        const imageUrl: string =  await this.firebaseService.saveImage(image.file, `${propertyName}/${i}`);
        firebaseImageUrls.push(imageUrl);
        console.log("INSERTED");
      }
    }
    console.log(firebaseImageUrls);
    return firebaseImageUrls;
    }
    getPropertyById(propertyId: number): Observable<any> {
      const stringifiedUserInfo: string | null = localStorage.getItem('token');
      if (stringifiedUserInfo) {
        const userInfo = JSON.parse(stringifiedUserInfo);
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${userInfo.id_token}`
        });
        return this.http.get(`http://localhost:8080/services/property/api/properties/${propertyId}`, { headers });
      } else {
        console.log('User token not found.');
        throw new Error('User token not found.');
      }
    }
  }
