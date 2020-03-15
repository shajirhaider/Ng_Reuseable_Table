import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {LocalStorageService} from '../service/localStorage.service'

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointmentForm: FormGroup;
  submitted = false;
  previousData = [];
  timeSlot = [
    {text: "4:00 - 5:00"},
    {text: "5:00 - 6:00"},
    {text: "6:00 - 7:00"}
  ]
  filteredTimeSlot :any = []


  constructor(private formBuilder: FormBuilder,  private storage : LocalStorageService) { }
  ngOnInit() {
    this.appointmentForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      pNum: ['', [Validators.required]],
      address: ['', [Validators.required]],
      age: ['', [Validators.required]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
    });

    this.fetchPreviousData()
  }

  get f() { return this.appointmentForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.appointmentForm.invalid) {
      return;
    } else {
      // let fetchData = []
      // if (this.storage.getItem('appointList')){
      //   fetchData = JSON.parse(this.storage.getItem('appointList'))
      // }
      this.previousData.push(this.appointmentForm.value)
      let stringifyData = JSON.stringify(this.previousData)
      this.storage.setItem('appointList', stringifyData)
      this.onReset()
    }
  }

  onReset() {
    this.submitted = false;
    this.appointmentForm.reset();
  }

  fetchPreviousData() {
    if (this.storage.getItem('appointList')){
      this.previousData = JSON.parse(this.storage.getItem('appointList')) 
    }
  }

  validateTimeSlot() {
    let bookedSlot = []
    this.previousData.forEach(item => {
				if (item.date === this.appointmentForm.value.date.toISOString()) {
					bookedSlot.push(item.time);
				}
      });
			this.filteredTimeSlot = this.timeSlot.filter(item=> !bookedSlot.includes(item.text))
  }
}
