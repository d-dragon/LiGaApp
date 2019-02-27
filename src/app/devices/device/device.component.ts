import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/shared/device.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styles: []
})
export class DeviceComponent implements OnInit {

  constructor(private service:DeviceService) { }

  ngOnInit() {
    this.resetForm()

  }

  resetForm(form?: NgForm) {
    if (form != null)
    form.resetForm();
    this.service.formData = {
      DeviceId: 0,
      DeviceName:'',
      DeviceCapability:''
    }
  }

  onSubmit(form:NgForm) {
    this.service.postDevice(form.value).subscribe(
      res => {
        console.log("added device successfully!");
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }
    )
  }
}
