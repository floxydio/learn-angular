import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeesagesComponent } from './meesages.component';

describe('MeesagesComponent', () => {
  let component: MeesagesComponent;
  let fixture: ComponentFixture<MeesagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeesagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeesagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
