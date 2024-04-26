import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { IReparto, IStatistichePS } from '@model/IStatoProntoSoccorso.model';
import { AttesaRepartoComponent } from '@ui/attesa-reparto/attesa-reparto.component';

@Component({
  selector: 'sps-card-stato-pronto-soccorso',
  standalone: true,
  imports: [CardModule, AttesaRepartoComponent],
  templateUrl: './card-stato-pronto-soccorso.component.html',
  styleUrl: './card-stato-pronto-soccorso.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardStatoProntoSoccorsoComponent {
  @Input({ required: true }) statoPS!: IReparto;

  tt = "cao";

  getStatisticheRepato(): IStatistichePS {
    return {
      ambulatorio: this.statoPS.ambulatorio,
      attesa: this.statoPS.attesa,
      osservazione: this.statoPS.osservazione ? this.statoPS.osservazione : undefined,
    };
  }

  filtraDescrizoneOspeale(descrizione: string): string {
    return descrizione.split(' - ')[0];
  }



}
