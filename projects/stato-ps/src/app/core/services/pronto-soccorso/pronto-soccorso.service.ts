import { Injectable, Signal } from '@angular/core';
import { HttpCoreService } from '../http/http-core.service';
import { IReparto, IStatoProntoSoccorso, IStatoPSFromApi } from '../../models/IStatoProntoSoccorso';
import { map, Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ProntoSoccorsoService {
  #apssUrl = 'https://servizi.apss.tn.it/opendata/STATOPS001.json';

  constructor(private httpCore: HttpCoreService) { }

  #getProntoSoccorsoDataFromApi(): Observable<IStatoPSFromApi> {
    return this.httpCore.get<IStatoPSFromApi>(this.#apssUrl);
  }

  #parseProntoSoccorsoData(data: IStatoPSFromApi): IReparto[] {

    const reparti: IReparto[] = [];

    data.forEach((res: IStatoProntoSoccorso) => {
      reparti.push(res.risposta.pronto_soccorso.reparto);
    });

    return reparti;
  }

  getProntoSoccorsoDataSignal(): Signal<IReparto[] | undefined>{
    return toSignal(this.#getProntoSoccorsoDataFromApi().pipe(
      map((data: IStatoPSFromApi) => this.#parseProntoSoccorsoData(data))
    ));
  }
}
