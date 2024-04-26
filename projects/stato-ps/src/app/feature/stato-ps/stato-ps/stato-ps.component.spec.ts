import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatoPsComponent } from './stato-ps.component';

describe('StatoPsComponent', () => {
  let component: StatoPsComponent;
  let fixture: ComponentFixture<StatoPsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatoPsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatoPsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
