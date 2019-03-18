import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CandidatsService } from '../candidats.service';
import { Candidat } from '../candidat';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-candidat-details',
  templateUrl: './candidat-details.component.html',
  styleUrls: ['./candidat-details.component.css']
})
export class CandidatDetailsComponent implements OnInit, OnDestroy  {
//candidat: any;
@Input() candidat : Candidat;
sub : Subscription;
editButton: boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private candidatService: CandidatsService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getCandidat();
  }
  private getCandidat() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.candidatService.getCandidat(id).subscribe((candidat: any) => {
          if (candidat) {
            this.candidat = candidat;
          }
          else {
            console.log(`'${id}' not found, returning to list`);
            this.goBack();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack(): void {
    this.location.back();
  }

 edit () {
   this.editButton=true;
   this.getCandidat();
   const id = this.candidat.id;
    this.router.navigate(['/edit/'+id]);
  
 }
}