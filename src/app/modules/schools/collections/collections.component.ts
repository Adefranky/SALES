import { Component, OnInit } from '@angular/core';
import { SchoolsService } from 'src/app/services/schools.service'; // Import SchoolsService

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  collections: any[] = []; 

  constructor(private schoolsService: SchoolsService) {}

  ngOnInit(): void {
    this.schoolsService.getCollections().subscribe(
      (data: any) => { // Specify the type of data as 'any'
        this.collections = data;
      },
      (error: any) => { // Specify the type of error as 'any'
        console.error('Error fetching collections data:', error);
        // Optionally, handle the error in the UI, e.g., display a message to the user
      }
    );
  }
}
