import { Component, OnInit, Input } from '@angular/core';
import { CandidatsService } from '../candidats.service';
import { Candidat } from '../candidat';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-candidat-details',
  templateUrl: './candidat-details.component.html',
  styleUrls: ['./candidat-details.component.css']
})
export class CandidatDetailsComponent implements OnInit {
candidat: Candidat;

  constructor(
    private route: ActivatedRoute,
    private candidatService: CandidatsService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getCandidat();
  }

  getCandidat(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.candidatService.getCandidat(id);
    //.subscribe(can => this.candidat = can);*/
  }

  goBack(): void {
    this.location.back();
  }
}




  

  
/*
 save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }*/
