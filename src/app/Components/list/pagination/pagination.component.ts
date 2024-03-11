import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/Models/Student';
import { PageLogicService } from 'src/app/Services/page-logic.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnDestroy{
  private service: PageLogicService = inject(PageLogicService)

  all_quantity!: number
  all_quantity_subscription!: Subscription

  ngOnInit(){
    this.all_quantity_subscription = this.service.students$.subscribe({
      next: (students: Student[]) =>{
        this.all_quantity = students.length
      }
    })
  }

  ngOnDestroy(): void {
    this.all_quantity_subscription.unsubscribe()
  }
}
