import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatDatepickerModule,
MatNativeDateModule,
MatListModule,
MatCardModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';


const modules = [
  MatButtonModule, MatCheckboxModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule,
  MatListModule,
  MatCardModule
];

@NgModule({
  imports: [modules],
  exports: [modules],
})
export class MyOwnCustomMaterialModule { }
