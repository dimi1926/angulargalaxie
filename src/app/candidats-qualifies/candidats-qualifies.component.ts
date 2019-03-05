import { Component, OnInit } from '@angular/core';
import { CandidatsService } from '../candidats.service';
import { Candidat } from '../candidat';

@Component({
  selector: 'app-candidats-qualifies',
  templateUrl: './candidats-qualifies.component.html',
  styleUrls: ['./candidats-qualifies.component.css']
})
export class CandidatsQualifiesComponent implements OnInit {
  candidats: Candidat[];

  constructor(private candidatsService:  CandidatsService) { }

  ngOnInit() {
    this.getAllCandidatsQualifies();

  }
  getAllCandidatsQualifies(): void {
    this.candidatsService.getAllQualified()
    .subscribe(cans => this.candidats = cans);
  }
}
