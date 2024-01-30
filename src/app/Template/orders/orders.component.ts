import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Order } from 'src/app/Model/Order';
import { OrderService } from '../../Service/OrderService/order-service.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  Order: Order ;
  Id: number;
  OrderForm: FormGroup;

  constructor(private OrderService: OrderService,private route: ActivatedRoute,private fb: FormBuilder,
    ) { }
  ngOnInit(): void {

this.route.queryParams.subscribe(params => {
    this.Id = +params['id']; // Convertir l'ID en nombre
  });

  this.OrderForm = this.fb.group({
    Id: [this.Id],
    Date: [''],
    Status: [''],
    Phone: [null],
    tva: [null],
  });

  console.log(this.OrderForm);
  }
  onSubmit() {
    const OrderData = this.OrderForm.value;
    
    this.OrderService.add(OrderData).subscribe(

      (response: any) => {
        console.log('Réponse de l\'API du OrderData :', response);
        console.log('API Response:', );
        console.log(OrderData);
        console.log(OrderData);

       
      },
      (error) => {
        console.log(OrderData);
        console.error('Erreur lors de la soumission du formulaire du OrderData :', error);
      }
    );
    console.log('API Response:', );
  }

}
