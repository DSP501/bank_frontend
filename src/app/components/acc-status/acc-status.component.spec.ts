import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccStatusComponent } from './acc-status.component';

describe('AccStatusComponent', () => {
  let component: AccStatusComponent;
  let fixture: ComponentFixture<AccStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
