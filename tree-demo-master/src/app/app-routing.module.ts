import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactCreateComponent} from "./contacts/contact-create/contact-create.component";
import {ContactListComponent} from "./contacts/contact-list/contact-list.component";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  { path: 'home', component: HomeComponent },
  {path: "contact-create", component: ContactCreateComponent},
  {path: "contact-list", component: ContactListComponent},
  {path: "products", component:ProductsComponent },
  {path: "products/:category", component:ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
