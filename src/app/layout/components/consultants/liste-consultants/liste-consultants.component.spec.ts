import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeConsultantsComponent } from './liste-consultants.component';

describe('ListeConsultantsComponent', () => {
  let component: ListeConsultantsComponent;
  let fixture: ComponentFixture<ListeConsultantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeConsultantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeConsultantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
