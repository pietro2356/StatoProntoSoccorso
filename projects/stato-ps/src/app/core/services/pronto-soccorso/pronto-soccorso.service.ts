import { Injectable } from '@angular/core';
import { HttpCoreService } from '../http/http-core.service';
import { Observable } from 'rxjs';
import { IReparto, IStatoProntoSoccorsoModel, IStatoPSFromApi } from '@model/IStatoProntoSoccorso.model';

@Injectable({
  providedIn: 'root'
})
export class ProntoSoccorsoService {
  #apssUrl = 'https://servizi.apss.tn.it/opendata/STATOPS001.json';

  constructor(private httpCore: HttpCoreService) { }

  getProntoSoccorsoDataFromApi(): Observable<IStatoPSFromApi> {
    return this.httpCore.get<IStatoPSFromApi>(this.#apssUrl);
  }

  parseProntoSoccorsoData(data: IStatoPSFromApi): IReparto[] {

    const reparti: IReparto[] = [];

    data.forEach((res: IStatoProntoSoccorsoModel) => {
      reparti.push(res.risposta.pronto_soccorso.reparto);
    });

    return reparti;
  }
}
