import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  @Input() data;
  @Input() header;
  @Input('redirectPath') redirectTo; 

  newData: any[] = [];

  constructor(  private route: ActivatedRoute, private router: Router, private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  goRoute() {
    console.log(this.redirectTo)
    this.router.navigate([this.redirectTo])   
  }
}
