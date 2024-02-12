

// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CouponListComponent } from './coupon-list/coupon-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/active', pathMatch: 'full' },
  { path: 'active', component: CouponListComponent },
  { path: 'upcoming', component: CouponListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
