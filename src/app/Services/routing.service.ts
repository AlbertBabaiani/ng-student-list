import { Injectable, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { PagesQuantity } from '../Models/PagesQuantity';

@Injectable({
  providedIn: 'root'
})
export class RoutingService implements OnInit, OnDestroy {

  constructor() { }

  private router: Router = inject(Router)
  
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute)
  private activated_route_subscription!: Subscription
  
  private studentList_subscription!: Subscription

  items_per_page$: Subject<PagesQuantity> = new Subject<PagesQuantity>()


  ngOnInit(): void {
    this.activated_route_subscription = this.activatedRoute.queryParamMap.subscribe({
      next: (query) =>{
        const queryParams = this.activatedRoute.snapshot.queryParamMap;

        const error_free: boolean = this.check_query_strings(queryParams)

        if(error_free){
          const result = this.check_query_items(query)

          if(result){
            this.items_per_page$.next(result)
          }
        }
        else{
          this.router.navigateByUrl('/error');
        }

      }
    })
  }

  // Check Queries
  check_query_strings(queryParams: ParamMap): boolean{
    return queryParams.keys.every((query: string) => {
        return query === 'Items' || query === 'SortColumn' || query === 'OrderBy';
    });
  }

  check_query_items(query: ParamMap, changeUrl: boolean = true): PagesQuantity | false{
    const quantity: number = Number(query.get('Items'))

    if(quantity === 10 || quantity === 25 || quantity === 50 || quantity === 100){
        if(changeUrl){
            this.router.navigate([''], {relativeTo: this.activatedRoute, queryParams: {Items: quantity}, queryParamsHandling: 'merge' });
        }
      return quantity
    }
    else if(query.get("Items") === '' || query.get("Items") === null || query.get("Items") === undefined){
        if(changeUrl){
          this.router.navigate([''], {relativeTo: this.activatedRoute, queryParams: {Items: 10}, queryParamsHandling: 'merge' });
        }
      return 10
    }
    else{
      this.router.navigateByUrl('/error');
      return false
    }
  }

  // End Check Queries



  set_filter_route(filter_column: string, filter_type: string): void{
    if(filter_type !== 'ascending' && filter_type !== 'descending' && filter_type !== ''){
        // router.navigate(['/Error'])
    }
    else{
        this.router.navigate([''], {relativeTo: this.activatedRoute, queryParams: {SortColumn: filter_column, OrderBy: filter_type}, queryParamsHandling: 'merge'});
    }
  }

  remove_filter_route(items_per_page: PagesQuantity): void{
    this.router.navigate([''], {relativeTo: this.activatedRoute, queryParams: {Items: items_per_page}});
  }

  ngOnDestroy(): void {
    if(this.studentList_subscription){
      this.studentList_subscription.unsubscribe()
    }

    if(this.activated_route_subscription){
      this.activated_route_subscription.unsubscribe()
    }
  }
}
