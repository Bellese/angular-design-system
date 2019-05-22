import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class AppPaginationComponent {
  @Output() currentPage = new EventEmitter<any>();
  @Input() dataRows;
  @Input() id;
  @Input() dataAutoId: string;

  p = 1;

  pageChanged(e) {
    this.currentPage.emit(e);
  }

}
