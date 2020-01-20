import { DataService } from './data-service.service';
import { ItemModel, Item } from './../../shared/models/model';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable } from 'rxjs';

export class ItemsDataSource implements DataSource<ItemModel> {

  constructor(private dataService: DataService) { }

  private itemsSubject = new BehaviorSubject<ItemModel[]>([]);

  public connect(): Observable<ItemModel[]> {
    return this.itemsSubject.asObservable();
  }

  public disconnect(): void {
    this.itemsSubject.complete();
  }

  public loadItems(item: Item) {
    this.dataService.getData(item)
      .subscribe((data: ItemModel[]) => {
        this.itemsSubject.next(data);
      });
  }
}
