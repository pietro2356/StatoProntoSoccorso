import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardContainerComponent } from '@pattern/card-container/card-container.component';

@Component({
  selector: 'sps-stato-ps',
  standalone: true,
  imports: [CardContainerComponent],
  templateUrl: './stato-ps.component.html',
  styleUrl: './stato-ps.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatoPsComponent{}
