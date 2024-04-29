# Stato Pronto Soccorso
Applicazione che permette la consultazione delle attese dei pronto soccorso della provincia di Trento.

## Scopo del progetto
Allenarmi nella realizzazione di applicativi con le nuove versioni di Angular, cercando sempre di migliorare il livello del progetto e le mie abilità.

## Avvio del progetto
Per usare il programma dovrete per prima cosa installare i `node modules` col comando:
```
npm install
```

Dopo di che potrete lanciarlo col comando:
```
npm start
```

Per poi recarvi sulla pagina al link: [http://localhost:4200/](http://localhost:4200/)

### Errore CORS
Le risorse e le API usate purtroppo sono soggette a CORS, per ovviare a questo problema vi sono delle estensioni per i browser che permettono di far funzionare il progetto.
* Chrome - `Allow CORS: Access-Control-Allow-Origin`
* Firefox - `CORS Everywhere`

In alternativa alle estensioni potete lanciare una tab di Google Chrome senza i controlli CORS aprendo il pannello **Esegui** con `WIN + R`.
Una volta aperto inserite questo comando e date INVIO:
```
chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
```
Da questa scheda di Chrome navigate fino all'URL di prima e potrete usare l'applicativo senza dover installare nessuna estensione.

## Novità del progetto
La realizzazione di questo progetto ha comportato delle migliorie rispetto al suo predecessore.
Sono state riviste varie cose tra cui:
* Struttura del progetto
* Utilizzo di nuovi strumenti per l'analisi del codice: ESLint e Prettier
* Logiche di programmazione nuove
* Nuove funzionalità fornite da Angular v17

### Strutura del progetto
La struttura del progetto è stata rivista per poter testare un nuovo approccio basato sull'ottimizzazione del codice e sulla sua manutenibilità.

La struttura si compone in queste parti:
* **Core**: [README.md](./projects/stato-ps/src/app/core/README.md)
* **Feature**: [README.md](./projects/stato-ps/src/app/feature/README.md)
* **Layout**: [README.md](./projects/stato-ps/src/app/layout/README.md)
* **Pattern**: [README.md](./projects/stato-ps/src/app/pattern/README.md)
* **Ui**: [README.md](./projects/stato-ps/src/app/ui/README.md)
* **Model**: [README.md](./projects/stato-ps/src/app/model/README.md)

