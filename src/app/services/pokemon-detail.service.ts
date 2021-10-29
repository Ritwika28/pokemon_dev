import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonDetailService {
  constructor() {}

  detailObs$: BehaviorSubject<any> = new BehaviorSubject<any>('');

  getDetailObs(): any | null {
    return this.detailObs$.value;
  }

  setDetailObs(data: any | null): void {
    this.detailObs$.next(data);
  }
}
