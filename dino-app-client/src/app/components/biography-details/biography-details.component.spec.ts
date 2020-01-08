import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographyDetailsComponent } from './biography-details.component';

describe('BiographyDetailsComponent', () => {
  let component: BiographyDetailsComponent;
  let fixture: ComponentFixture<BiographyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiographyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiographyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
