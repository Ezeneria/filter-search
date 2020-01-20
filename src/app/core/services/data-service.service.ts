import { Item, ItemModel } from './../../shared/models/model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()

export class DataService {
  private data = [
    {
      id: 1,
      name: 'Kingston',
      type: 'ssd',
    },
    {
      id: 2,
      name: 'Seagate',
      type: 'ssd',
    },
    {
      id: 3,
      name: 'Intel core i7',
      type: 'processor',

    }, {
      id: 4,
      name: 'Intel core i5',
      type: 'processor',

    },
    {
      id: 23,
      name: 'Amd',
      type: 'processor',

    },
    {
      id: 24,
      name: 'Mac mini',
      type: 'computer',
    }
  ];

  getData(item: Item): Observable<ItemModel[]> {
    return of(this.data)
      .pipe(map((itemsFromObs: ItemModel[]) =>
        itemsFromObs.filter((itemFromObs: ItemModel) =>
          itemFromObs.name.toLowerCase().indexOf(String(item.name).toLowerCase()) > -1 &&
          itemFromObs.type.toLowerCase().indexOf(String(item.type).toLowerCase()) > -1)
      )
      );
  }
}
