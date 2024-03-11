import { Component, OnInit, inject } from '@angular/core';
import { PageLogicService } from 'src/app/Services/page-logic.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit{
  private service: PageLogicService = inject(PageLogicService)

  all_quantity!: number

  ngOnInit(){
    this.all_quantity = this.service.students_quantity
  }
}
