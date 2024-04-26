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

/*export interface IAttesa {
  bianco: string
  verde: string
  azzurro: string
  arancio: string
  giallo: string
  rosso: string
}*/

/*export interface IAmbulatorio {
  bianco: string
  verde: string
  azzurro: string
  arancio: string
  giallo: string
  rosso: string
}*/

export interface IAmbulatorio {
  [codColore: string]: string
}
export interface IAttesa {
  [codColore: string]: string
}
export interface IOsservazione {
  [codColore: string]: string
}

/*export interface IOsservazione {
  [bianco: string]: string
  verde: string
  azzurro: string
  arancio: string
  giallo: string
  rosso: string
}*/

export interface IAttesaMedia {
  bianco: string
  verde: string
  azzurro: string
  arancio: string
  giallo: string
  rosso: string
}
