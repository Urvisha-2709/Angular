
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css']
})
export class CouponListComponent implements OnInit {
  coupons: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      if (url[0].path === 'active') {
        this.loadActiveCoupons();
      } else if (url[0].path === 'upcoming') {
        this.loadUpcomingCoupons();
      }
    });
  }

  loadActiveCoupons() {
    this.coupons = [
      { code: 'DO123', off: '5%' },
      // Add more active coupons here
    ];
  }

  loadUpcomingCoupons() {
    this.coupons = [
      // Add upcoming coupons here
    ];
  }
}
