import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor( private storage: AngularFireStorage) { }
    saveImage(f: File,filepath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const file = f;
    const filePath = filepath;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // Get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(downloadURL => {
          // Resolve the Promise with the download URL
          resolve(downloadURL);
        }, error => {
          // Reject the Promise if there's an error getting the download URL
          reject(error);
        });
      })
    ).subscribe();
  });
}
}
