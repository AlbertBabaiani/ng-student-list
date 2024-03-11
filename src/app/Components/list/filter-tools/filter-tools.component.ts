import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PagesQuantity } from 'src/app/Models/PagesQuantity';

@Component({
  selector: 'app-filter-tools',
  templateUrl: './filter-tools.component.html',
  styleUrls: ['./filter-tools.component.scss']
})
export class FilterToolsComponent implements OnInit, OnDestroy{
  quantity_arr: PagesQuantity[] = [10, 25, 50, 100]
  items_quantity: PagesQuantity = 10

  private router: Router = inject(Router)
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute)

  private activated_route_subscription!: Subscription

  ngOnInit(){
    this.activated_route_subscription = this.activatedRoute.queryParamMap.subscribe({
      next: (query) =>{
        const quantity = Number(query.get('Items')) as PagesQuantity

        if(quantity === 10 || quantity === 25 || quantity === 50 || quantity === 100){
          this.items_quantity = quantity
        }
        else if(query.get("Items") === '' || query.get("Items") === null || query.get("Items") === undefined){
          this.items_quantity = 10
        }
      }
    })
  }
  
  

  changeQuantity(): void{
    this.router.navigate([''], { queryParams: { Items: this.items_quantity } })
  }

  ngOnDestroy(): void {
    this.activated_route_subscription.unsubscribe()
  }
}
