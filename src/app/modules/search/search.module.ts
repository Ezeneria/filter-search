import { DataService } from './../../core/services/data-service.service';
import { RouterModule } from '@angular/router';
import { ResultComponent } from './components/result/result.component';
import { FilterComponent } from './components/filter/filter.component';
import { SharedModule } from './../../shared/shared.module';
import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
const COMPONENTS = [
  SearchComponent,
  FilterComponent,
  ResultComponent
];
const MODULES = [MatInputModule, MatListModule, MatTableModule];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    MODULES
  ],
  exports: [COMPONENTS, MODULES],
  providers: [DataService]
})

export class SearchModule {}
