import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CandidatsService } from '../candidats.service';
import { Candidat } from '../candidat';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import {FormBuilder , FormGroup, Validators, ReactiveFormsModule, FormControl} from '@angular/forms';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {NgbInputDatepicker, NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-candidat-edit',
  templateUrl: './candidat-edit.component.html',
  styleUrls: ['./candidat-edit.component.css']
})
export class CandidatEditComponent implements OnInit {
candidat : Candidat;
cans : Candidat[];
sub : Subscription;
submitted = false;
registerForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private candidatService: CandidatsService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.candidatService.getCandidat(id).subscribe((candidat: any) => {
          if (candidat) {
            this.candidat = candidat;
            this.registerForm= this.formBuilder.group({
              nom: [candidat.nom, [Validators.required, Validators.minLength(2)]],
              prenom: [candidat.prenom, [Validators.required, Validators.minLength(2)]],
              dtNaissance: [candidat.dtNaissance, Validators.required]
            }) 
            
          }
          else {
            console.log(`'${id}' not found, returning to list`);
            this.goBack();
          }
        });
      }
    });
  }

  get f() {return this.registerForm.controls;}

  onSubmit(){
    this.submitted= true;
    if (this.registerForm.invalid){
      return;
    }
  }

  ngOnDestroy() {this.sub.unsubscribe(); }
  
  goBack(): void {this.location.back();}
  
  update() {
    const id = this.route.snapshot.params['id'];
    let prenom = (<HTMLInputElement>document.getElementById('prenom')).value;
    let nom = (<HTMLInputElement>document.getElementById('nom')).value;
    let dt = (<HTMLInputElement>document.getElementById('dtNaissance')).value;

    this.candidatService.getCandidat(id).subscribe((candidat: any) => {
        candidat.nom=nom;
        candidat.prenom=prenom;
        candidat.dtNaissance=dt;
        this.candidat = candidat;       
        this.candidatService.update(this.candidat).subscribe((candi: any) => {
        console.log(candi.dtNaissance + " " + candi.nom);
        this.router.navigate(['/details/'+id]);
    });
    });     
  }
}
