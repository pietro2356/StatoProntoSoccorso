import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { IReparto } from '@model/IStatoProntoSoccorso.model';
import { AttesaColoreComponent } from '@ui/attesa-colore/attesa-colore.component';

@Component({
  selector: 'sps-card-stato-pronto-soccorso',
  standalone: true,
  imports: [CardModule, AttesaColoreComponent],
  templateUrl: './card-stato-pronto-soccorso.component.html',
  styleUrl: './card-stato-pronto-soccorso.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardStatoProntoSoccorsoComponent {
  @Input({ required: true }) statoPS!: IReparto;
}
