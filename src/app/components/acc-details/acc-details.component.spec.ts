import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccDetailsComponent } from './acc-details.component';

describe('AccDetailsComponent', () => {
  let component: AccDetailsComponent;
  let fixture: ComponentFixture<AccDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
