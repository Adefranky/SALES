import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolsService } from '../../services/schools.service'; 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  schools = [
    { name: 'School A', type: 'Primary', product: 'Zeraki Analytics', county: 'Nairobi', registrationDate: new Date(), contact: '123456789', balance: 5000 },
    { name: 'School B', type: 'Secondary', product: 'Zeraki Finance', county: 'Mombasa', registrationDate: new Date(), contact: '987654321', balance: 3000 }
  ];

  school: any;

  constructor(
    private schoolsService: SchoolsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.schoolsService.getSchoolById(id).subscribe((data: any) => { // Specify the type of data as 'any'
        this.school = data;
      });
    }
  }
}
