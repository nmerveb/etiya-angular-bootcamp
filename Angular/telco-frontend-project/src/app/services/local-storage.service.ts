import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setItem(key: string, item: any) {
    localStorage.setItem(`${key}`, item);
  }
}
