import { Component, OnInit } from '@angular/core';
import { CandidatsService } from '../candidats.service';
import { Candidat } from '../candidat';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-candidats-qualifies',
  templateUrl: './candidats-qualifies.component.html',
  styleUrls: ['./candidats-qualifies.component.css']
})
export class CandidatsQualifiesComponent implements OnInit {
  candidats: Candidat[];
  public datasource =new MatTableDataSource<Candidat>();
  public displayedColumns =['numcan', 'prenom', 'nom', 'dtNaissance', 'dtInscription', 'estQualified' ];

  constructor(private candidatsService:  CandidatsService) { }

  ngOnInit() {
    this.getAllCandidatsQualifies();

  }
  getAllCandidatsQualifies(): void {
    this.candidatsService.getAllQualified()
    .subscribe(cans => this.datasource.data = cans as Candidat[]);
  }
}
