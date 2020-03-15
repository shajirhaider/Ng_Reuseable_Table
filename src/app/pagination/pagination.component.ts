import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  recordPerPageList = [1, 2, 3, 5]
  numberofItem = 0
  currentPage = 0
  pageArr = [];
  totalPage = 0;

  @Input() paginatedData = []
  // @Input() recordPerPageList = []
  @Output() filteredData: EventEmitter<any[]> = new EventEmitter();  
   
  
  ngOnInit() {
    this.numberofItem = this.recordPerPageList[0]
    this.pagination(0, this.numberofItem);
  }  
  
  pagination(page, per_page) {
    this.currentPage = page
    let offset = (page - 1) * per_page
    this.totalPage = Math.ceil( this.paginatedData.length / this.numberofItem);
    this.pageArr = Array(Math.ceil( this.paginatedData.length / this.numberofItem)).fill(0).map((x,i)=>i); 
    this.filteredData.emit(this.paginatedData.slice(offset).slice(0, per_page))
  }
  
}
