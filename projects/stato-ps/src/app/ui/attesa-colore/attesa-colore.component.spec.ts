import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttesaColoreComponent } from './attesa-colore.component';

describe('AttesaColoreComponent', () => {
  let component: AttesaColoreComponent;
  let fixture: ComponentFixture<AttesaColoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttesaColoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttesaColoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
