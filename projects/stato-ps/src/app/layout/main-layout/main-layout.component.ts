import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MessagesModule } from 'primeng/messages';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { HomeComponent } from '../../feature/home/home/home.component';
import { environment } from '../../../environments/environment';

// ERRORI DI LINTING IN BASE ALLE REGOLE DI ESLINT

@Component({
  selector: 'sps-main-layout',
  standalone: true,
  imports: [MessagesModule, RouterOutlet, RouterLink, RouterLinkActive, TitleCasePipe, NgOptimizedImage, HomeComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  TT = environment.production;
}
