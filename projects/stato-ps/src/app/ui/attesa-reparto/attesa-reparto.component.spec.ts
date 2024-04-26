import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttesaRepartoComponent } from './attesa-reparto.component';

describe('AttesaRepartoComponent', () => {
  let component: AttesaRepartoComponent;
  let fixture: ComponentFixture<AttesaRepartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttesaRepartoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttesaRepartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
