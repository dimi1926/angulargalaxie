import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CandidatsService } from '../candidats.service';
import { Candidat } from '../candidat';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { strictEqual } from 'assert';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-candidat-details',
  templateUrl: './candidat-details.component.html',
  styleUrls: ['./candidat-details.component.css']
})
export class CandidatDetailsComponent implements OnInit, OnDestroy  {
//candidat: any;
@Input() candidat : Candidat;
sub : Subscription;
  constructor(
    private route: ActivatedRoute,
    private candidatService: CandidatsService,
    private location: Location
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.candidatService.getCandidat(id).subscribe((candidat: any) => {
          if (candidat) {
            this.candidat = candidat;         
          } else {
            console.log(`'${id}' not found, returning to list`);
            this.goBack();
          }
        });
      }
    });
    //this.getCandidat();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  goBack(): void {
    this.location.back();
  }

  save(form: NgForm) {
    this.candidatService.save(form).subscribe(result => {
      this.goBack();
    }, error => console.error(error));
  }

  remove(href) {
    this.candidatService.remove(href).subscribe(result => {
      this.goBack();
    }, error => console.error(error));
  }

}
/*{
  this.sub = this.route.params.subscribe(params => {
    const id = params['id'];
    if (id) {
      this.carService.get(id).subscribe((car: any) => {
        if (car) {
          this.car = car;
          this.car.href = car._links.self.href;
          this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
        } else {
          console.log(`Car with id '${id}' not found, returning to list`);
          this.gotoList();
        }
      });
    }
  });
}*/