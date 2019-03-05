import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatsService } from './candidats.service';
import { CandidatsComponent } from './candidats/candidats.component';
import { CandidatDetailsComponent } from './candidat-details/candidat-details.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CandidatsQualifiesComponent } from './candidats-qualifies/candidats-qualifies.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {
    path: 'tous',
    component: CandidatsComponent
  },
  {
    path: 'qualifies',
    component: CandidatsQualifiesComponent
  },
  {
    path: 'can/:id',
    component: CandidatDetailsComponent
  } 
];
@NgModule({
  declarations: [
    AppComponent,
    CandidatsComponent,
    CandidatDetailsComponent,
    CandidatsQualifiesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [CandidatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
