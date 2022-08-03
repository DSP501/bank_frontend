import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccstatmentComponent } from './accstatment.component';

describe('AccstatmentComponent', () => {
  let component: AccstatmentComponent;
  let fixture: ComponentFixture<AccstatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccstatmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccstatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
