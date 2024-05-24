import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signups',
  templateUrl: './signups.component.html',
  styleUrls: ['./signups.component.css']
})
export class SignupsComponent implements OnInit {

  signupDistribution = {
    primary: { analytics: 30, finance: 20, timetable: 10 },
    secondary: { analytics: 30, finance: 20, timetable: 10 },
    igcse: { analytics: 20, finance: 20, timetable: 20 }
  };

  constructor() { }

  ngOnInit(): void { }
}
