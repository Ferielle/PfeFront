import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './Template/header/header.component';
import { HomeComponent } from './Template/home/home.component';
import { ProductsingleComponent } from './Template/productsingle/productsingle.component';
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
import { HTTP_INTERCEPTORS, HttpClientModule,HttpClient  } from '@angular/common/http';
import { ProductsComponent } from './Template/products/products-list/products.component';
import { FooterComponent } from './Template/footer/footer.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductformComponent } from './Template/products/productform/productform.component';
import { ProduitformComponent } from './Template/produitform/produitform.component';
import { CommonModule, DatePipe } from '@angular/common';
import { ShoppingCartComponent } from './Template/shopping-cart/shopping-cart.component';
import { AuthGuard } from './Service/AuthentificationService/auth.guard';
import { AuthenticationService } from './Service/AuthentificationService/authentication.service';
import { RandomGuard } from './Service/AuthentificationService/random.guard';
import { TokenInterceptor } from './Service/AuthentificationService/token.interceptor';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from './Service/BrandService/brand.service';
import { UserService } from './Service/AuthentificationService/user.service';
import { CategoryService } from './Service/CategoryService/category.service';
import { CheckoutService } from './Service/CheckoutService/checkout-service.service';
import { CommentService } from './Service/CommentService/comment-service.service';
import { DiscountService } from './Service/DiscountService/discount-service.service';
import { FavoriteService } from './Service/FavoriteService/favorite-service.service';
import { FeatureDetailsService } from './Service/FeatureDetailsService/feature-details-service.service';
import { FeatureService } from './Service/FeaturesService/features-service.service';
import { OrderDetails } from './Service/OrderDetailsService/order-details-service.service';
import { OrderService } from './Service/OrderService/order-service.service';
import { ProductDetailsService } from './Service/ProductDetailsService/product-details-service.service';
import { ProductsService } from './Service/ProductsService/products-service.service';
import { ShoppingCartService } from './Service/ShoppingCartService/shopping-cart-service.service';
import { StockService } from './Service/StockService/stock-service.service';
import { SubCategoryService } from './Service/SubCategoryService/sub-category-service.service';
import { VatService } from './Service/VatService/vat-service.service';
import { CartService } from './Service/CartService/cart.service';
import { AppComponent } from './app.component';
import { CartComponent } from './Template/cart/cart.component';
import { MultipleCartsComponent } from './Template/multiple-carts/multiple-carts.component';
import { CheckoutListComponent } from './Template/checkout-list/checkout-list.component';

@NgModule({
  declarations: [
    
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsingleComponent,
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
    CartComponent,
    MultipleCartsComponent,
    CheckoutListComponent
  
    

  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    MyRoutingModule,
    HttpClientModule ,
    FormsModule,
    BrowserModule, 
    ReactiveFormsModule,
    CommonModule,
    
    

  ],
  exports: [
    HeaderComponent,
  FooterComponent,
],
  providers: [ AuthGuard,
    AuthenticationService,
    UserService,
    BrandService,
    CategoryService,
    CheckoutService,
    CommentService,
    DiscountService,
    FavoriteService,
    FeatureDetailsService,
    FeatureService,
    OrderDetails,
    OrderService,
    ProductDetailsService,
    ProductsService,
    ShoppingCartService,
    StockService,
    SubCategoryService,
    VatService,
    CartService,
    RandomGuard,
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
