import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolsService } from '../../services/schools.service'; // Import SchoolsService

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  school: any;

  constructor(
    private schoolsService: SchoolsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam); // Convert idParam to a number

    if (!isNaN(id)) {
      this.schoolsService.getSchoolById(id).subscribe(
        (data: any) => {
          this.school = data;
        },
        (error: any) => {
          console.error('Error fetching school data:', error);
          // Optionally, handle the error in the UI, e.g., display a message to the user
        }
      );
    } else {
      console.error('Invalid ID:', idParam);
      // Optionally, handle the invalid ID in the UI, e.g., display a message to the user
    }
  }
}
