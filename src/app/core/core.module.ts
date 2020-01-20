import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent
];

@NgModule({

  declarations: COMPONENTS,
  imports: [
    CommonModule,
  ],
  exports: [COMPONENTS]
})

export class CoreModule {
}
