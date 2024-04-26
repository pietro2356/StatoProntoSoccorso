import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStatoProntoSoccorsoComponent } from './card-stato-pronto-soccorso.component';

describe('CardStatoProntoSoccorsoComponent', () => {
  let component: CardStatoProntoSoccorsoComponent;
  let fixture: ComponentFixture<CardStatoProntoSoccorsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardStatoProntoSoccorsoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardStatoProntoSoccorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
