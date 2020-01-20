import { Item } from './../../../../shared/models/model';
import { DataService } from './../../../../core/services/data-service.service';
import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { ItemsDataSource } from 'src/app/core/services/table-data-source';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) { }
  public displayedColumns: string[] = ['id', 'name', 'type'];
  public dataSource: ItemsDataSource;

  public ngOnInit(): void {
    this.dataSource = new ItemsDataSource(this.dataService);
    this.activatedRoute.queryParams.subscribe((params: Item) => {
      this.dataSource.loadItems(params);
    });
  }
}
