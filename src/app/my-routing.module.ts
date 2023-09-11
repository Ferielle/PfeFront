import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Template/home/home.component';
import { CartComponent } from './Template/cart/cart.component';
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
import { ProductImageComponent } from './Template/product-image/product-image.component';
import { ProductformComponent } from './Template/products/productform/productform.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: "home", component: HomeComponent},
  {path: "cart", component: CartComponent},
  {path: "forgot password", component: ForgotPasswordComponent},
  {path: "orders", component: OrdersComponent},
  {path: "shop", component: ShopComponent},
  {path: "productsingle", component: ProductsingleComponent},
  {path: "signup", component: SignupComponent},
  {path: "login", component: LoginComponent},
  {path: "profile-details", component: ProfileDetailsComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "cart", component: CartComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "editaddress", component: EditAddressComponent},
  {path: "address", component: AddressComponent},
  {path: "category", component: CategoryComponent},
  {path: "Brand", component: BrandsComponent},
  {path: "Products", component: ProductsComponent},
  {path: "ProductImage", component: ProductImageComponent},
  {path: "prodform", component: ProductformComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MyRoutingModule { }
