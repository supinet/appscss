import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidaoComponent } from './rapidao.component';

describe('RapidaoComponent', () => {
  let component: RapidaoComponent;
  let fixture: ComponentFixture<RapidaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapidaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapidaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
