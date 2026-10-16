import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultAct } from './consult-act';

describe('ConsultAct', () => {
  let component: ConsultAct;
  let fixture: ComponentFixture<ConsultAct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultAct],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultAct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
