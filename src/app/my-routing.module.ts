import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Template/home/home.component';
import { ForgotPasswordComponent } from './Template/forgot-password/forgot-password.component';
import { OrdersComponent } from './Template/orders/orders.component';
import { ShopComponent } from './Template/shop/shop.component';
import { ProductsingleComponent } from './Template/productsingle/productsingle.component';
import { SignupComponent } from './Template/signup/signup.component';
import { LoginComponent } from './Template/login/login.component';
import { ProfileDetailsComponent } from './Template/profile-details/profile-details.component';
import { DashboardComponent } from './Template/dashboard/dashboard.component';
import { CheckoutComponent } from './Template/checkout/checkout.component';
import { EditAddressComponent } from './Template/edit-address/edit-address.component';
import { AddressComponent } from './Template/address/address.component';
import { CategoryComponent } from './Template/category/category.component';
import { BrandsComponent } from './Template/brands/brands.component';
import { Products } from './Model/Products';
import { ProductsComponent } from './Template/products/products-list/products.component';
import { ProductformComponent } from './Template/products/productform/productform.component';
import { ShoppingCart } from './Model/ShoppingCart';
import { ShoppingCartComponent } from './Template/shopping-cart/shopping-cart.component';
import { RandomGuard } from './Service/AuthentificationService/random.guard';
import { CartComponent } from './Template/cart/cart.component';
import { CheckoutListComponent } from './Template/checkout-list/checkout-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: "home", component: HomeComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "forgot password", component: ForgotPasswordComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "orders", component: OrdersComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "shop", component: ShopComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "signup", component: SignupComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "login", component: LoginComponent},
  {path: "profile-details", component: ProfileDetailsComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "dashboard", component: DashboardComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "checkout", component: CheckoutComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "editaddress", component: EditAddressComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "address", component: AddressComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "category", component: CategoryComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "Brand", component: BrandsComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "Products", component: ProductsComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  {path: "prodform", component: ProductformComponent, canActivate: [RandomGuard], canLoad: [RandomGuard]},
  { path: 'produit/:id', component: ProductsingleComponent , canActivate: [RandomGuard], canLoad: [RandomGuard]},
  { path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [RandomGuard], canLoad: [RandomGuard] },
  { path: 'cart', component: CartComponent, canActivate: [RandomGuard], canLoad: [RandomGuard] },
  { path: 'checkoutlist', component: CheckoutListComponent, canActivate: [RandomGuard], canLoad: [RandomGuard] }

 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MyRoutingModule { }
