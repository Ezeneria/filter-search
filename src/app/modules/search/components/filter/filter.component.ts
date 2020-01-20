import { Item } from './../../../../shared/models/model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {
  public searchGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {}

  public search(): void {
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: this.searchGroup.value,
        queryParamsHandling: 'merge',
      });
  }

  public ngOnInit(): void {
    const queryParams: Item = this.activatedRoute.snapshot.queryParams as Item;

    this.searchGroup = this.fb.group({
      name: [queryParams.name ? queryParams.name : ''],
      type: [queryParams.type ? queryParams.type : '']
    });
  }

}
