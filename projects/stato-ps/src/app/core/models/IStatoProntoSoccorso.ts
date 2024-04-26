export type IStatoPSFromApi = IStatoProntoSoccorso[]

export interface IStatoProntoSoccorso {
  risposta: Risposta
}

export interface Risposta {
  "@tipo": string
  timestamp: string
  pronto_soccorso: ProntoSoccorso
}

export interface ProntoSoccorso {
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
  attesa: Attesa
  ambulatorio: Ambulatorio
  osservazione: Osservazione
  "attesa-media": AttesaMedia
}

export interface Attesa {
  bianco: string
  verde: string
  azzurro: string
  arancio: string
  giallo: string
  rosso: string
}

export interface Ambulatorio {
  bianco: string
  verde: string
  azzurro: string
  arancio: string
  giallo: string
  rosso: string
}

export interface Osservazione {
  bianco: string
  verde: string
  azzurro: string
  arancio: string
  giallo: string
  rosso: string
}

export interface AttesaMedia {
  bianco: string
  verde: string
  azzurro: string
  arancio: string
  giallo: string
  rosso: string
}
