import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IAmbulatorio, IAttesa } from '@model/IStatoProntoSoccorso.model';

@Component({
  selector: 'sps-attesa-colore',
  standalone: true,
  imports: [],
  templateUrl: './attesa-colore.component.html',
  styleUrl: './attesa-colore.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AttesaColoreComponent {
  @Input({ required: true }) ambulatorio!: IAmbulatorio;
  @Input({ required: true }) attesa!: IAttesa;

  get ambulatorioKeys(): string[] {
    return Object.keys(this.ambulatorio);
  }

  get attesaKeys(): string[] {
    return Object.keys(this.attesa);
  }

}
