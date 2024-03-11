import { Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, takeUntil } from 'rxjs';
import { Courses, Courses_array } from 'src/app/Models/Courses';
import { PagesQuantity } from 'src/app/Models/PagesQuantity';
import { Student } from 'src/app/Models/Student';
import { PageLogicService } from 'src/app/Services/page-logic.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy{
  private main_service: PageLogicService = inject(PageLogicService)

  private router: Router = inject(Router)
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute)

  studentList: Student[] = []
  studentList_subscription!: Subscription
  total_score: number = 0

  items_per_page: PagesQuantity = 10

  private activated_route_subscription!: Subscription

  
  ngOnInit(){
    this.studentList_subscription = this.main_service.students$.subscribe({
      next: (students: Student[]) => {
        this.studentList = students
      }
    })

    this.total_score = this.main_service.total_score

    this.activated_route_subscription = this.activatedRoute.queryParamMap.subscribe({
      next: (query) =>{
        const quantity: number = Number(query.get('Items'))

        console.log(query.get("Items"))

        if(quantity === 10 || quantity === 25 || quantity === 50 || quantity === 100){
          this.items_per_page = quantity
        }
        else if(query.get("Items") === '' || query.get("Items") === null || query.get("Items") === undefined){
          this.items_per_page = 10
          this.router.navigate([''], {queryParams: {Items: 10} });
        }
        else{
          this.router.navigateByUrl('/error');
        }
      }
    })
  }


  isAdding: boolean = false

  courses_list: Courses[] = Courses_array

  // New Student

  chosen_gender: string = ''
  chosen_course: Courses | '' = ''

  @ViewChild('id') add_id!: ElementRef
  @ViewChild('first_name') add_first_name!: ElementRef
  @ViewChild('last_name') add_last_name!: ElementRef
  @ViewChild('dob') add_date_of_birth!: ElementRef
  @ViewChild('points') add_points!: ElementRef
  @ViewChild('fee') add_fee!: ElementRef

  // End New Student

 


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


  deleteStudent(id: string){
    this.main_service.deleteStudent(id)
  }


  ngOnDestroy(){
    this.activated_route_subscription.unsubscribe()
    this.studentList_subscription.unsubscribe()
  }
}

