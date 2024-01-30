import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Checkout } from 'src/app/Model/Checkout';
import { Products } from 'src/app/Model/Products';
import { CheckoutService } from 'src/app/Service/CheckoutService/checkout-service.service';
import { ShoppingCartService } from 'src/app/Service/ShoppingCartService/shopping-cart-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart: Products[] = []; // Assuming Product is the model for your products
  checkout: Checkout ;
  shoppingCartId: number;
  CheckoutForm: FormGroup;
  Id: number=42;
  checkouts: Checkout[]=[];
  constructor(private Checkoutservice: CheckoutService,private route: ActivatedRoute,private fb: FormBuilder,private router: Router
  ) {
    
     }
getCheckoutForListId(Id): void {    
    this.router.navigate(['/checkoutlist'], { queryParams: { id: Id } });
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.shoppingCartId = params['id'];
    });
    this.CheckoutForm = this.fb.group({
      Receiver: [''], // Ajoutez d'autres champs ici
      Phone: [null],
      Country:[''],
      City: [''],    
      Address: [''],
      Date: [''],
      Apartement: [''],
      PostCode: [null],
      Email: [''],
      OrderNotes:[''],
      ShoppingCartId: [this.shoppingCartId], 

    });
    console.log(this.CheckoutForm);
  }

  onSubmit() {
    const CheckoutData = this.CheckoutForm.value;
    
    this.Checkoutservice.add(CheckoutData).subscribe(

      (response: any) => {
        console.log('Réponse de l\'API du checkout :', response);
        console.log('API Response:', );
        console.log(CheckoutData);
        console.log(CheckoutData);

       
      },
      (error) => {
        console.log(CheckoutData);
        console.error('Erreur lors de la soumission du formulaire du produit :', error);
      }
    );
    console.log('API Response:', );
  }
}
//i think this is the vat thing HERE !!