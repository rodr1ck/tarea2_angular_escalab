import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from '../services/harrypotter.service';

@Component({
  selector: 'app-harrypotter',
  templateUrl: './harrypotter.component.html',
  styleUrls: ['./harrypotter.component.css'],
})
export class HarrypotterComponent implements OnInit {
  person: any;

  constructor(private harryPotterService: HarrypotterService) {}

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson() {
    this.harryPotterService.getPersonaje().subscribe((resp) => {
      console.log('harry potter', resp);
      this.person = resp;
    });
  }
}
