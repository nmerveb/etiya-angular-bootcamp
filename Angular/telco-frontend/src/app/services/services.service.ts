import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Service } from '../models/service';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private controllerUrl = `${environment.apiUrl}/services`;
  constructor(private httpClient: HttpClient) {}

  getAllServices(): Observable<Service[]> {
    return this.httpClient.get<Service[]>(this.controllerUrl);
  }
}
