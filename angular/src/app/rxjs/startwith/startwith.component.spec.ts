import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartwithComponent } from './startwith.component';

describe('StartwithComponent', () => {
  let component: StartwithComponent;
  let fixture: ComponentFixture<StartwithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartwithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartwithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
