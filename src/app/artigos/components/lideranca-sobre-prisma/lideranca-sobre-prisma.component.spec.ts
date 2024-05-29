import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiderancaSobrePrismaComponent } from './lideranca-sobre-prisma.component';

describe('LiderancaSobrePrismaComponent', () => {
  let component: LiderancaSobrePrismaComponent;
  let fixture: ComponentFixture<LiderancaSobrePrismaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiderancaSobrePrismaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiderancaSobrePrismaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
