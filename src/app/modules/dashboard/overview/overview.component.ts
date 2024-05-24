import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

interface Overview {
  total_revenue: number;
  total_customers: number;
  total_orders: number;
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  overview: Overview = {
    total_revenue: 0,
    total_customers: 0,
    total_orders: 0
  };
  collections: number = 120;
  signups: number = 80;
  totalRevenue: number = 50000;
  bouncedCheques: number = 5;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getOverview().subscribe((data: Overview) => {
      this.overview = data;
    }, (error: any) => {
      console.error('Error fetching overview data', error);
    });
  }
}
