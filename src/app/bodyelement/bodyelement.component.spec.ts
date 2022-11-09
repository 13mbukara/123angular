import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyelementComponent } from './bodyelement.component';

describe('BodyelementComponent', () => {
  let component: BodyelementComponent;
  let fixture: ComponentFixture<BodyelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyelementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
