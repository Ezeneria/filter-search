import { ButtonComponent } from './components/button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
const COMPONENTS = [ButtonComponent];
const MODULES = [MatButtonModule];
@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    MODULES
  ],
  exports: [COMPONENTS, MODULES]
})

export class SharedModule {}

