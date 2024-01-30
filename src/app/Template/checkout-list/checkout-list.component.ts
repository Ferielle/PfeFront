import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Checkout } from 'src/app/Model/Checkout';
import { CheckoutService } from 'src/app/Service/CheckoutService/checkout-service.service';

@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.component.html',
  styleUrls: ['./checkout-list.component.css']
})
export class CheckoutListComponent implements OnInit {
  checkoutDetails: Checkout[]= []; // Assurez-vous que le type correspond à la structure de vos données
  CheckoutId: number;
  Id: number;
  constructor(private checkoutService: CheckoutService, private router: Router, private route:ActivatedRoute) { }
  
getOrderId(Id: number ): void {    
    this.router.navigate(['/orders'], { queryParams: { id: Id } });
  }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.Id = params['id'];
    });
this.checkoutService.getCheckoutById(this.Id).subscribe(
      (detail: Checkout[]) => {
    this.checkoutDetails = this.transformObjectToArray(detail);

      },
      (error) => {
        console.error(error);
      }
);
    
    
  }

  transformObjectToArray(obj: any): any[] {
    return Object.entries(obj);
  }
  }
 
    


