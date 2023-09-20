import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductInfoComponent } from './products/product-info/product-info.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './site/header/header.component';
import { BannerComponent } from './site/banner/banner.component';
import { SignupComponent } from './site/signup/signup.component';
import { NotFoundComponent } from './site/not-found/not-found.component';
import { AuthGaurdService } from './site/auth-gaurd.service';
import { SearchComponent } from './products/search/search.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './site/login/login.component';
import { AuthInterceptorService } from './site/auth-interceptor';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'productsEdit/:id', component: ProductEditComponent, canActivate: [AuthGaurdService] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGaurdService] },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ProductInfoComponent,
    ProductsComponent,
    CartComponent,
    SignupComponent,
    LoginComponent,
    NotFoundComponent,
    ProductEditComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
