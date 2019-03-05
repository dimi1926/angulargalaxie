import { Component, OnInit } from '@angular/core';
import { CandidatsService } from '../candidats.service';
import { Candidat } from '../candidat';

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.css']
})
export class CandidatsComponent implements OnInit {
  candidats: Candidat[];
  constructor(private candidatsService:  CandidatsService) { }

  ngOnInit() {
    this.getAllCandidats();
  }
  
  getAllCandidats(): void {
    this.candidatsService.getAll()
    .subscribe(cans => this.candidats = cans);
  }


}

 
 /*add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
}
  

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
*/
