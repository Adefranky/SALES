import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { SchoolsService } from '../../services/school.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  invoices = [
    { number: 'INV001', item: 'Zeraki Analytics', creationDate: new Date(), dueDate: new Date(), amount: 1000, paidAmount: 500, balance: 500, status: 'Pending', daysUntilDue: 5 },
    { number: 'INV002', item: 'Zeraki Finance', creationDate: new Date(), dueDate: new Date(), amount: 1500, paidAmount: 1500, balance: 0, status: 'Paid', daysUntilDue: 10 }
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
