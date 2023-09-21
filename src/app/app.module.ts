import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Template/header/header.component';
import { HomeComponent } from './Template/home/home.component';
import { ProductsingleComponent } from './Template/productsingle/productsingle.component';
import { CartComponent } from './Template/cart/cart.component';
import { CheckoutComponent } from './Template/checkout/checkout.component';
import { ShopComponent } from './Template/shop/shop.component';
import { DashboardComponent } from './Template/dashboard/dashboard.component';
import { OrdersComponent } from './Template/orders/orders.component';
import { LoginComponent } from './Template/login/login.component';
import { SignupComponent } from './Template/signup/signup.component';
import { ForgotPasswordComponent } from './Template/forgot-password/forgot-password.component';
import { ProfileDetailsComponent } from './Template/profile-details/profile-details.component';
import { AddressComponent } from './Template/address/address.component';
import { EditAddressComponent } from './Template/edit-address/edit-address.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MyRoutingModule } from './my-routing.module';
import { StockfeatureComponent } from './Template/stockfeature/stockfeature.component';
import { AccessoriesComponent } from './Template/accessories/accessories.component';
import { BrandsComponent } from './Template/brands/brands.component';
import { ArtComponent } from './Template/art/art.component';
import { CategoryComponent } from './Template/category/category.component';
import { FavoriteComponent } from './Template/favorite/favorite.component';
import { StockComponent } from './Template/stock/stock.component';
import { AboutUsComponent } from './Template/about-us/about-us.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './Template/products/products-list/products.component';
import { FooterComponent } from './Template/footer/footer.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductformComponent } from './Template/products/productform/productform.component';
import { ProduitformComponent } from './Template/produitform/produitform.component';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './Template/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsingleComponent,
    CartComponent,
    CheckoutComponent,
    ShopComponent,
    DashboardComponent,
    OrdersComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ProfileDetailsComponent,
    AddressComponent,
    EditAddressComponent,
    StockfeatureComponent,
    AccessoriesComponent,
    BrandsComponent,
    ArtComponent,
    CategoryComponent,
    FavoriteComponent,
    StockComponent,
    AboutUsComponent,
    ProductsComponent,
    ProductformComponent,
    ProduitformComponent,
    ShoppingCartComponent,
    

  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    MyRoutingModule,
    HttpClientModule ,
    FormsModule,
    BrowserModule, 
    ReactiveFormsModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
