import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { SearchModule } from './modules/search/search.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RootRoutingModule } from './root.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    RootRoutingModule,
    SearchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
