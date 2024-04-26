import { ProntoSoccorsoService } from '@core/services/pronto-soccorso/pronto-soccorso.service';
import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sps-card-container',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardContainerComponent{
  psData = this.psService.getProntoSoccorsoDataSignal();
  constructor(private psService: ProntoSoccorsoService) {}


}
