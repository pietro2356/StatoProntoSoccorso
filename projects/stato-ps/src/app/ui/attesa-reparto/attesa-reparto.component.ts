import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { IStatistichePS } from '../../model/IStatoProntoSoccorso.model';
import { AvatarModule } from 'primeng/avatar';


interface IStatistica {
  codColore: string;
  ambulatorio: string;
  attesa: string;
  osservazione?: string;
}

interface IStyle{
  'background-color': string;
  color: string;
}

@Component({
  selector: 'sps-attesa-reparto',
  standalone: true,
  imports: [SharedModule, TableModule, AvatarModule],
  templateUrl: './attesa-reparto.component.html',
  styleUrl: './attesa-reparto.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttesaRepartoComponent {
  @Input({ required: true }) statistichePS!: IStatistichePS;

  statistichePSRenderizzabili: IStatistica[] = [];

  ngOnInit() {
    this.getStatistichePSRenderizzabili();
  }

  getStatistichePSRenderizzabili() {
    for (let i = 0; i < this.coloriKeys.length; i++) {
      this.statistichePSRenderizzabili.push({
        codColore: this.coloriKeys[i],
        ambulatorio: this.ambulatorioValues[i],
        attesa: this.attesaValues[i],
      });
    }

    console.log(this.statistichePSRenderizzabili);
  }

  //[style]="{ 'background-color': '#2196F3', color: '#ffffff' }"
  extractCssColor(color: string): IStyle {
    switch (color) {
      case 'bianco':
        return {'background-color': '#f3f3f3', color: '#212121'};
      case 'verde':
        return {'background-color': '#4CAF50', color: '#212121'};
      case 'azzurro':
        return {'background-color': '#2196F3', color: '#f3f3f3'};
      case 'arancio':
        return {'background-color': '#FF9800', color: '#212121'};
      case 'rosso':
        return {'background-color': '#F44336', color: '#f3f3f3'};
      default:
        return {'background-color': '#f3f3f3', color: '#212121'};
    }
  }

  get coloriKeys(): string[] {
    return Object.keys(this.statistichePS.ambulatorio).filter(key => key !== 'giallo');
  }

  get ambulatorioValues(): string[] {
    return Object.values(this.statistichePS.ambulatorio);
  }

  get attesaValues(): string[] {
    return Object.values(this.statistichePS.attesa);
  }
}
