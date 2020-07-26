import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesCardComponent } from './routes-card.component';

describe('RoutesCardComponent', () => {
  let component: RoutesCardComponent;
  let fixture: ComponentFixture<RoutesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
