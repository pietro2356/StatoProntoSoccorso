import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MessagesModule } from 'primeng/messages';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'sps-main-layout',
  standalone: true,
  imports: [MessagesModule, RouterOutlet, RouterLink, RouterLinkActive, TitleCasePipe],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {}
