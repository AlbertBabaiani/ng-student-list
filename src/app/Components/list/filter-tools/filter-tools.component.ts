import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PagesQuantity } from 'src/app/Models/PagesQuantity';
import { RoutingService } from 'src/app/Services/routing.service';

@Component({
  selector: 'app-filter-tools',
  templateUrl: './filter-tools.component.html',
  styleUrls: ['./filter-tools.component.scss']
})
export class FilterToolsComponent implements OnInit, OnDestroy{
  routing_service: RoutingService = inject(RoutingService)

  quantity_arr: PagesQuantity[] = [10, 25, 50, 100]
  items_quantity: PagesQuantity = 10

  private router: Router = inject(Router)
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute)

  private activated_route_subscription!: Subscription

  ngOnInit(){
    this.activated_route_subscription = this.activatedRoute.queryParamMap.subscribe({
      next: (query) =>{
        const result = this.routing_service.check_query_items(query, false)
        
        if(result){
          this.items_quantity = result
        }
      }
    })
  }
  
  

  changeQuantity(): void{
    this.router.navigate([''], { queryParams: { Items: this.items_quantity }, queryParamsHandling: 'merge' })
  }

  ngOnDestroy(): void {
    this.activated_route_subscription.unsubscribe()
  }
}
