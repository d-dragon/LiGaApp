import { Injectable } from '@angular/core';
import { Device } from './device.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  formData:Device;
  readonly apiURL = 'http://localhost:5000/api';
  constructor(private http:HttpClient) { }

  postDevice(formData:Device) {
    return this.http.post(this.apiURL+'/devices', formData);
  }
}
