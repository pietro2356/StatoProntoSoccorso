export type IStatoPSFromApi = IStatoProntoSoccorsoModel[];

export interface IStatoProntoSoccorsoModel {
  risposta: IRisposta
}

export interface IRisposta {
  "@tipo": string
  timestamp: string
  pronto_soccorso: IProntoSoccorso
}

export interface IProntoSoccorso {
  reparto: IReparto
}

export interface IReparto {
  codice: string
  descrizione: string
  ospedale: string
  unita_operativa?: string
  descrizione_ambulatorio?: string
  direttore: string
  localita: string
  messaggio?: string
  attesa: IAttesa
  ambulatorio: IAmbulatorio
  osservazione: IOsservazione
  "attesa-media": IAttesaMedia
}

export interface IColori {
  bianco: string;
  verde: string;
  azzurro: string;
  arancio: string;
  rosso: string;
}

export type IAmbulatorio = IColori;
export type IAttesa = IColori;
export type IOsservazione = IColori;
export type IAttesaMedia = IColori;

export interface IStatistichePS {
  ambulatorio: IAmbulatorio;
  attesa: IAttesa;
  osservazione?: IOsservazione;
}
