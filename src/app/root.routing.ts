import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule),
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class RootRoutingModule {}
