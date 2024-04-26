import { ProntoSoccorsoService } from '@core/services/pronto-soccorso/pronto-soccorso.service';
import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { CardStatoProntoSoccorsoComponent } from '@ui/card-stato-pronto-soccorso/card-stato-pronto-soccorso.component';
import { IReparto } from '@model/IStatoProntoSoccorso.model';

@Component({
  selector: 'sps-card-container',
  standalone: true,
  imports: [JsonPipe, CardStatoProntoSoccorsoComponent],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardContainerComponent {
  psData = signal<IReparto[]>([]);
  constructor(private psService: ProntoSoccorsoService) {
    effect((onCleanup) => {
      const sub = this.psService.getProntoSoccorsoDataFromApi().subscribe((data) => {
        console.log('data', data);
        this.psData.set(this.psService.parseProntoSoccorsoData(data));
      })
      onCleanup(() => sub.unsubscribe());
    });
  }



}
