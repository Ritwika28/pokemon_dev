import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonDetailService {
  constructor() {}

  private detailObs$: BehaviorSubject<any> = new BehaviorSubject(null);

  getDetailObs(): Observable<any> {
    return this.detailObs$.asObservable();
  }

  setDetailObs(data: any) {
    this.detailObs$.next(data);
  }
}
