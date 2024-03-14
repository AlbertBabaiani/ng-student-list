import { Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';

import { Subscription } from 'rxjs';

import { Courses, Courses_array } from 'src/app/Models/Courses';
import { PagesQuantity } from 'src/app/Models/PagesQuantity';
import { Student } from 'src/app/Models/Student';
import { Table_Headers } from 'src/app/Models/TableHeaders';
import { PageLogicService } from 'src/app/Services/page-logic.service';
import { RoutingService } from 'src/app/Services/routing.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy{
  private main_service: PageLogicService = inject(PageLogicService)

  private routing_service: RoutingService = inject(RoutingService)

  // private router: Router = inject(Router)
  // private activatedRoute: ActivatedRoute = inject(ActivatedRoute)

  // Students List
  private _studentList: Student[] = []

  get studentList(): Student[]{
    return this._studentList
  }

  private studentList_subscription!: Subscription
  total_score: number = 0
  // End Students List


  // Page Items
  items_per_page: PagesQuantity = 10
  items_per_page_subscription!: Subscription
  // private activated_route_subscription!: Subscription
  // End Page Items

  
  ngOnInit(){
    this.studentList_subscription = this.main_service.students$.subscribe({
      next: (students: Student[]) => {
        this._studentList = students
      }
    })

    this.total_score = this.main_service.total_score

    this.items_per_page_subscription = this.routing_service.items_per_page$.subscribe({
      next: (pages: PagesQuantity) => {
        this.items_per_page = pages
      }
    })
    // this.activated_route_subscription = this.activatedRoute.queryParamMap.subscribe({
    //   next: (query) =>{
    //     const queryParams = this.activatedRoute.snapshot.queryParamMap;

    //     const error_free: boolean = check_query_strings(queryParams)

    //     if(error_free){
    //       const result = check_query_items(query, this.router, this.activatedRoute)

    //       if(result){
    //         this.items_per_page = result
    //       }
    //     }
    //     else{
    //       this.router.navigateByUrl('/error');
    //     }

    //   }
    // })
  }



  // Course List
  courses_list: Courses[] = Courses_array // To display in the template
  // End Course List


  // Table Headers
  readonly table_headers: string[] = Table_Headers
  // End Table Headers


  // Filter
  filter_column: string = ''
  filter_type: 'ascending' | 'descending' | '' = ''

  change_filter_button(unformated_column: string): {[key: string]: boolean}{
    const column: string = unformated_column.replace(' ', '').toLowerCase()
    return {
      'active-1': this.filter_column === column && this.filter_type === 'ascending',
      'active-2': this.filter_column === column && this.filter_type === 'descending'
    }
  }

  change_filter(unformated_column: string): void{
    const column: string = unformated_column.replace(/\s/g, '').toLowerCase()

    if(this.filter_column === column){
     this.change_filter_type()
    }

    else{
      this.filter_column = column
      this.filter_type = 'ascending'
      this.routing_service.set_filter_route(this.filter_column,this.filter_type)
    }
  }

  change_filter_type(): void{
    switch(this.filter_type){
      case 'ascending': {
        this.filter_type='descending'
        this.routing_service.set_filter_route(this.filter_column,this.filter_type)
        break
      }
      case 'descending': {
        this.filter_type=''
        this.filter_column = ''
        this.routing_service.remove_filter_route(this.items_per_page)
        break
      }
      // default: {
      //   console.log('gg')
      //   this.router.navigateByUrl('/error');
      //   break
      // }
    }
  }
  // End Filter
  
  // New Student
  isAdding: boolean = false

  chosen_gender: string = ''
  chosen_course: Courses | '' = ''

  @ViewChild('id') add_id!: ElementRef
  @ViewChild('first_name') add_first_name!: ElementRef
  @ViewChild('last_name') add_last_name!: ElementRef
  @ViewChild('dob') add_date_of_birth!: ElementRef
  @ViewChild('points') add_points!: ElementRef
  @ViewChild('fee') add_fee!: ElementRef

  addNewStudent(){
    if(this.chosen_course){

      this.main_service.addStudent(
        this.add_id.nativeElement.value,
        this.add_first_name.nativeElement.value,
        this.add_last_name.nativeElement.value,
        this.chosen_gender,
        this.add_date_of_birth.nativeElement.value,
        this.chosen_course,
        this.add_points.nativeElement.value,
        this.add_fee.nativeElement.value,
        )
        
      this.deleteAdding()
    }
  }

  deleteAdding(){    
    this.chosen_gender = ''
    this.chosen_course = ''  
    this.isAdding = false
  }

  // End New Student


  // Delete Student
  deleteStudent(id: string){
    this.main_service.deleteStudent(id)
  }
  // End Delete Student


  ngOnDestroy(){
    // this.activated_route_subscription.unsubscribe()
    this.studentList_subscription.unsubscribe()
  }
}