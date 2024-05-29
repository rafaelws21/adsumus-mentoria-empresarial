import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivacaoHunterFilosofiaComponent } from './motivacao-hunter-filosofia.component';

describe('MotivacaoHunterFilosofiaComponent', () => {
  let component: MotivacaoHunterFilosofiaComponent;
  let fixture: ComponentFixture<MotivacaoHunterFilosofiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotivacaoHunterFilosofiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotivacaoHunterFilosofiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
