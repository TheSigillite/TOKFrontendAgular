import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakemodComponent } from './makemod.component';

describe('MakemodComponent', () => {
  let component: MakemodComponent;
  let fixture: ComponentFixture<MakemodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakemodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakemodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
