import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { DevicesComponent } from './devices/devices.component';
import { DeviceComponent } from './devices/device/device.component';
import { DeviceListComponent } from './devices/device-list/device-list.component';
import { DeviceService } from './shared/device.service';

@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    DeviceComponent,
    DeviceListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
