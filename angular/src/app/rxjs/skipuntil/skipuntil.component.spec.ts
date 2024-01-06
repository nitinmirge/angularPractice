import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipuntilComponent } from './skipuntil.component';

describe('SkipuntilComponent', () => {
  let component: SkipuntilComponent;
  let fixture: ComponentFixture<SkipuntilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkipuntilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkipuntilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
