import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DevicesComponent } from './devices/devices.component';
import { DeviceComponent } from './devices/device/device.component';
import { DeviceListComponent } from './devices/device-list/device-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    DeviceComponent,
    DeviceListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
