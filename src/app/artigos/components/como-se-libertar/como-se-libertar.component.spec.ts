import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoSeLibertarComponent } from './como-se-libertar.component';

describe('ComoSeLibertarComponent', () => {
  let component: ComoSeLibertarComponent;
  let fixture: ComponentFixture<ComoSeLibertarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComoSeLibertarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComoSeLibertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
