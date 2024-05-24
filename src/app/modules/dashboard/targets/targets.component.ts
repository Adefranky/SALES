import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
// import { Label } from 'ng2-charts';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.css']
})
export class TargetsComponent implements OnInit {

  signupTargets = {
    analytics: { target: 100, achieved: 80 },
    finance: { target: 100, achieved: 60 },
    timetable: { target: 100, achieved: 40 }
  };

  chartData: ChartDataset[] = [];
// chartLabels: Label[] = [];
chartOptions: ChartOptions = {};
chartLegend = true;
chartType: ChartType = 'line';


  constructor() { }

  ngOnInit(): void { }
}
