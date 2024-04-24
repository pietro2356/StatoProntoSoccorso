import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MainLayoutComponent } from '@layout/main-layout/main-layout.component';

@Component({
  selector: 'sps-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, MainLayoutComponent],
  template: '<ng-container><sps-main-layout></sps-main-layout></ng-container>'
})
export class AppComponent {}
