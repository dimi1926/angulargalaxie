import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CandidatsService } from '../candidats.service';
import { Candidat } from '../candidat';
import { MatTableDataSource,MatSort , MatPaginatorModule, MatPaginator} from '@angular/material';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.css']
})
export class CandidatsComponent implements OnInit, AfterViewInit {
  candidats: Candidat[];
  canASuprimmer: Candidat;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public datasource =new MatTableDataSource<Candidat>();
public displayedColumns =['numcan', 'prenom', 'nom', 'dtNaissance', 'dtInscription', 'estQualified', 'supprimer' ];
  constructor(
    private candidatsService:  CandidatsService,
    private router: Router  ) { }

  ngOnInit() {
    this.getAllCandidats();
  }
  ngAfterViewInit() {
    this.datasource.sort=this.sort;
    this.datasource.paginator=this.paginator;
  }
  getAllCandidats(): void {
    this.candidatsService.getAll()
    .subscribe(cans => this.datasource.data = cans as Candidat[]);
  }

  public doFilter =(value:string) => {
    this.datasource.filter= value.trim().toLocaleLowerCase();
  }
  delete(id: string): void {
    this.candidatsService.getCandidat(id).subscribe((candidat: any) => {
      console.log("candidat a supprimer: " +candidat.id)
      this.canASuprimmer = candidat; 
      this.candidatsService.delete(id).subscribe((candi: any) => {
      console.log(candi.id + " a supprimer ");
      this.getAllCandidats();
      });
  });
  }

 /*add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
}*/

}