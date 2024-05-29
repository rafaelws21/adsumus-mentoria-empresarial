import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratidaoComponent } from './gratidao.component';

describe('GratidaoComponent', () => {
  let component: GratidaoComponent;
  let fixture: ComponentFixture<GratidaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GratidaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GratidaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
