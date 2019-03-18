import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatsService } from './candidats.service';
import { CandidatsComponent } from './candidats/candidats.component';
import { CandidatDetailsComponent } from './candidat-details/candidat-details.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CandidatsQualifiesComponent } from './candidats-qualifies/candidats-qualifies.component';
import { CandidatEditComponent } from './candidat-edit/candidat-edit.component';
import {FormBuilder , FormGroup, Validators} from '@angular/forms'
import {MatTableModule, MatButtonModule, MatCheckboxModule, MatSortModule,MatPaginatorModule,
  MatCardModule,MatIconModule, MatInputModule, MatNativeDateModule, MatDatepickerModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
//import { MatDatepickerToggle} from '@angular/material/datepicker';
import { MatFormFieldModule} from '@angular/material/form-field';

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
    path: 'details/:id',
    component: CandidatDetailsComponent
  },
  {
    path: 'edit/:id',
    component: CandidatEditComponent
  } 
];
@NgModule({
  declarations: [
    AppComponent,
    CandidatsComponent,
    CandidatDetailsComponent,
    CandidatsQualifiesComponent,
    CandidatEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,MatSortModule,
    MatInputModule,
    FlexLayoutModule,
    MatNativeDateModule, MatDatepickerModule,  MatFormFieldModule,MatPaginatorModule
    //,MatDatepickerToggle
  ],
  providers: [CandidatsService],
  bootstrap: [AppComponent],
  exports: [
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,   
    MatInputModule, MatSortModule,
    MatNativeDateModule, MatDatepickerModule,  MatFormFieldModule,MatPaginatorModule
        //,MatDatepickerToggle

  ]
})
export class AppModule { }
