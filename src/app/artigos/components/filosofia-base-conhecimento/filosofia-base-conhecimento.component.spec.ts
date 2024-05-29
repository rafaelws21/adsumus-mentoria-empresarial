import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilosofiaBaseConhecimentoComponent } from './filosofia-base-conhecimento.component';

describe('FilosofiaBaseConhecimentoComponent', () => {
  let component: FilosofiaBaseConhecimentoComponent;
  let fixture: ComponentFixture<FilosofiaBaseConhecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilosofiaBaseConhecimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilosofiaBaseConhecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
