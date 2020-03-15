import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../service/localStorage.service'

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  data = []
  header = [
    {text:"First name", value:"firstName"},
    {text:"Last name", value:"lastName"},
    {text:"#Phone", value:"pNum"},
    {text:"Date", value:"date"},
    { text: "Time", value: "time" },
    {text: "Age", value:"age"}

  ]
  constructor( private storage : LocalStorageService) { }

  ngOnInit() {
    // let data = JSON.stringify(this.data)
    // this.storage.setItem("appointList", data)
    let data = this.storage.getItem("appointList")
    this.data = JSON.parse(data)
  }

  parsedate(date) {
    return date.substring(0, 10);
  }

}
