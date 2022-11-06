import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  //subject obsevable a benzer, subscribe olup degerin degisikliklerini dinleyebiliriz.
  // Subject, baslangicta initial degeri calismaz, ilk degisim anindan itibaren her calisma aninda dinlemeye baslar
  //Behavior baslangicta bir deger ister ve subscribe olundugu anda o initial degeri ister.
  //isLoading: boolean = false;
  isLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  pendingRequestCount: number = 0;
  constructor() {}

  startLoading() {
    //this.isLoading = true;
    this.pendingRequestCount++;
    this.isLoadingSubject.next(this.pendingRequestCount > 0); //subjectin degerini degistirir ve bu degere subscribe olan yerlere iletir.
  }
  stopLoading() {
    //this.isLoading = false;
    this.pendingRequestCount--;
    this.isLoadingSubject.next(this.pendingRequestCount > 0);
  }
}
